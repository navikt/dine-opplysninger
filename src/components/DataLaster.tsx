import React, { useEffect } from 'react';
import { hentOppfolgingStatus, hentRegistreringData, hentSituasjon } from '../api/api';
import { useFetch } from '../utils/use-fetch';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Feilmelding from './feilmelding/Feilmelding';
import AlertStripeAdvarsel from 'nav-frontend-alertstriper/lib/advarsel-alertstripe';
import Lenke from 'nav-frontend-lenker';
import HoyreChevron from 'nav-frontend-chevron/lib/hoyre-chevron';
import { ARBEIDSSOKERREGISTRERING_URL } from '../utils/constants';
import { useAppStore } from '../stores/app-store';

export const DataLaster = (props: { children: any }) => {
	const situasjonFetch = useFetch(hentSituasjon);
	const registreringFetch = useFetch(hentRegistreringData);
	const oppfolgingStatusFetch = useFetch(hentOppfolgingStatus);
	const {
		situasjon, setSituasjon,
		registrering, setRegistrering,
		oppfolgingStatus, setOppfolgingStatus
	} = useAppStore();

	useEffect(() => {
		if (situasjonFetch.data && !situasjon) {
			setSituasjon(situasjonFetch.data);
		}

		if (registreringFetch.data && !registrering) {
			setRegistrering(registreringFetch.data);
		}

		if (oppfolgingStatusFetch.data && !oppfolgingStatus) {
			setOppfolgingStatus(oppfolgingStatusFetch.data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [situasjonFetch.data, registreringFetch.data, oppfolgingStatusFetch.data]);

	if (situasjonFetch.isLoading || registreringFetch.isLoading || oppfolgingStatusFetch.isLoading) {
		return (
			<div className="spinner-wrapper centered">
				<NavFrontendSpinner type="XXL" />
			</div>
		);
	}

	if (
		registreringFetch.isError ||
		oppfolgingStatusFetch.isError ||
		situasjonFetch.isError ||
		registreringFetch.data === null ||
		situasjonFetch.data === null
	) {
		return <Feilmelding />;
	}

	if (!oppfolgingStatusFetch.data || !oppfolgingStatusFetch.data.underOppfolging) {
		return (
			<div id="ikke-under-oppfolgning-container">
				<AlertStripeAdvarsel className="ikke-under-oppfolgning-boks">
					Du må være registrert hos NAV for å se informasjon om deg.
					<br />{' '}
					<Lenke href={ARBEIDSSOKERREGISTRERING_URL}>
						Registrer deg hos NAV <HoyreChevron />
					</Lenke>
				</AlertStripeAdvarsel>
			</div>
		);
	}

	return props.children;
};
