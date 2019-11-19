import React from 'react';
import { ReactComponent as CvIkon } from './svg/cv.svg';
import { ReactComponent as JobbprofilIkon } from './svg/jobbprofil.svg';
import { ReactComponent as SykfravaerIkon } from './svg/sykefravaer.svg';
import { ReactComponent as DialogIkon } from './svg/dialog.svg';
import { ReactComponent as MalIkon } from './svg/mal.svg';
import './InformasjonsLenker.less';
import LenkeMedInfo from './LenkeMedInfo';
import { SYKMELDT } from '../../api/data/registrering-data';
import { CONTEXT_PATH } from '../../utils/constants';
import { useAppStore } from '../../stores/app-store';

const InformasjonsLenker = () => {
	const { registrering: { registrering, type } } = useAppStore();
	const fremtidigSituasjon = registrering ? registrering.besvarelse.fremtidigSituasjon : null;
	const skalViseCvOgJobbprofil =
		type !== SYKMELDT ||
		fremtidigSituasjon === 'NY_ARBEIDSGIVER' ||
		fremtidigSituasjon === 'USIKKER';
	return (
		<ul className="informasjons-lenker">
			<LenkeMedInfo
				visible={skalViseCvOgJobbprofil}
				ikon={<CvIkon />}
				tittel="CV"
				beskrivelse="Hold CV-en oppdatert."
				lenketekst="Gå til din CV"
				lenke="https://arbeidsplassen.nav.no/cv"
			/>
			<LenkeMedInfo
				visible={skalViseCvOgJobbprofil}
				ikon={<JobbprofilIkon />}
				tittel="Jobbprofil"
				beskrivelse="Legg inn jobbønsker."
				lenketekst="Gå til din jobbprofil"
				lenke="https://arbeidsplassen.nav.no"
			/>
			<LenkeMedInfo
				visible={type === SYKMELDT}
				ikon={<SykfravaerIkon />}
				tittel="Ditt sykefravær"
				beskrivelse="Sykemeldinger, oppfølgingsplaner og annen relevant informasjon om sykefraværet ditt."
				lenketekst="Gå til ditt sykefravær"
				lenke={`${CONTEXT_PATH}/sykefravaer`}
			/>
			<LenkeMedInfo
				visible={true}
				ikon={<DialogIkon />}
				tittel="Dialog"
				beskrivelse="Meldingene mellom deg og veilederen din."
				lenketekst="Gå til dialog"
				lenke={`${CONTEXT_PATH}/aktivitetsplan/dialog`}
			/>
			<LenkeMedInfo
				visible={true}
				ikon={<MalIkon />}
				tittel="Mål"
				beskrivelse="Legg til målet ditt, slik at vi kan veilede deg bedre."
				lenketekst="Gå til mål"
				lenke={`${CONTEXT_PATH}/aktivitetsplan/mal/endre`}
			/>
		</ul>
	);
};

export default InformasjonsLenker;
