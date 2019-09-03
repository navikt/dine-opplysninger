import React, { useEffect, useState } from 'react';
import './Hovedmal.less';
import { HovedmalAlternativ, HovedmalType } from '../../api/data/hovedmal-type';
import { Collapse } from 'react-collapse';
import { AlternativGruppe } from './AlternativGruppe';
import { hentHovedmal, oppdaterHovedmal } from '../../api/api';
import NavFrontendSpinner from 'nav-frontend-spinner';
import GrunnPanel from '../felleskomponenter/GrunnPanel';
import LenkeKnapp from '../felleskomponenter/LenkeKnapp';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';

export enum FetchStateTypes {
	LOADING,
	FAILURE,
	OK
}

function Hovedmal() {
	const modus = new URL(window.location.href).searchParams.get('modus');
	const [endreVisning, setSkalEndreState] = useState(modus === 'rediger');
	const [alternativState, setSituasjonState] = useState(HovedmalAlternativ.IKKE_OPPGITT);
	const [fetchState, setFetchState] = useState(FetchStateTypes.OK);

	const knappeTekst = alternativState === HovedmalAlternativ.IKKE_OPPGITT ? 'Legg til' : 'Endre';

	useEffect(() => {
		setFetchState(FetchStateTypes.LOADING);
		hentHovedmal()
			.then((res: HovedmalType) => {
				setSituasjonState(res.alternativId);
				setFetchState(FetchStateTypes.OK);
			})
			.catch(() => {
				setFetchState(FetchStateTypes.FAILURE);
			});
	}, []);

	function lagreValg(valgtAlternativ: string) {
		if (HovedmalAlternativ[valgtAlternativ] === alternativState || alternativState === undefined) {
			setSkalEndreState(false);
			return;
		}

		setFetchState(FetchStateTypes.LOADING);
		oppdaterHovedmal(valgtAlternativ, HovedmalAlternativ[valgtAlternativ])
			.then((situasjon: HovedmalType) => {
				setSkalEndreState(false);
				setSituasjonState(situasjon.alternativId);
				setFetchState(FetchStateTypes.OK);
			})
			.catch(() => {
				setFetchState(FetchStateTypes.FAILURE);
			});
	}

	function visInnhold() {
		return endreVisning ? (
			<Collapse isOpened={true}>
				<AlternativGruppe lagretSvar={alternativState} onSave={lagreValg} onCancel={() => onCancel()} />
			</Collapse>
		) : null;
	}

	function onCancel() {
		setSkalEndreState(false);
	}

	return (
		<GrunnPanel className="hovedmal" border={true} feil={fetchState === FetchStateTypes.FAILURE}>
			<div className="typo-normal lenke-element endre-knapp-boks">
				<div>
					<strong>Mål: </strong>

					<span>{HovedmalAlternativ[alternativState]}</span>
				</div>
				{fetchState === FetchStateTypes.LOADING ? <NavFrontendSpinner /> : null}
				{fetchState === FetchStateTypes.OK ? (
					<LenkeKnapp
						id="btn-legg-til-situasjon"
						hidden={endreVisning}
						onClick={() => setSkalEndreState(!endreVisning)}
					>
						{knappeTekst}
					</LenkeKnapp>
				) : null}
				{fetchState === FetchStateTypes.FAILURE ? (
					<Normaltekst className="feil">Systemet er nede, prøv igjen senere</Normaltekst>
				) : null}
			</div>
			{fetchState === FetchStateTypes.OK ? visInnhold() : null}
		</GrunnPanel>
	);
}

export default Hovedmal;
