import * as React from 'react';
import CvIkon from './svg/cv';
import JobbprofilIkon from './svg/jobbprofil';
import MotereferatIkon from './svg/motereferat';
import SykfravarIkon from './svg/sykfravar';
import DialogIkon from './svg/dialog';
import MalIkon from './svg/mal';
import './InformasjonsLenker.less';
import LenkeMedInfo from './LenkeMedInfo';
import { SYKMELDT } from '../../../../datatyper/registreringData';
import { CONTEXT_PATH } from '../../../../utils/constants';

const InformasjonsLenker = (props: {type: string, fremtidigSituasjon: string | null}) => {
    const skalViseCvOgJobbprofil = props.type !== SYKMELDT
        || props.fremtidigSituasjon === 'NY_ARBEIDSGIVER'
        || props.fremtidigSituasjon === 'USIKKER';
    return (
        <ul className="informasjons-lenker">
            <LenkeMedInfo
                visible={skalViseCvOgJobbprofil}
                ikon={<CvIkon/>}
                tittel="CV"
                beskrivelse="Hold CV-en oppdatert."
                lenketekst="Gå til din CV"
                lenke="https://arbeidsplassen.nav.no/cv"
            />
            <LenkeMedInfo
                visible={skalViseCvOgJobbprofil}
                ikon={<JobbprofilIkon/>}
                tittel="Jobbprofil"
                beskrivelse="Legg inn jobbønsker."
                lenketekst="Gå til din jobbprofil"
                lenke="https://arbeidsplassen.nav.no"
            />
            <LenkeMedInfo
                visible={true}
                ikon={<MotereferatIkon/>}
                tittel="Møtereferater"
                beskrivelse="Referater fra møter mellom deg og veilederen din."
                lenketekst="Se referatene"
                lenke={`${CONTEXT_PATH}/aktivitetsplan?filter=mote&filter=samtalereferat`}
            />
            <LenkeMedInfo
                visible={props.type === SYKMELDT}
                ikon={<SykfravarIkon/>}
                tittel="Ditt sykefravær"
                beskrivelse="Sykemeldinger, oppfølgingsplaner og annen relevant informasjon om sykefraværet ditt."
                lenketekst="Gå til ditt sykefravær"
                lenke={`${CONTEXT_PATH}/sykefravaer`}
            />
            <LenkeMedInfo
                visible={true}
                ikon={<DialogIkon/>}
                tittel="Dialog"
                beskrivelse="Meldingene mellom deg og veilederen din."
                lenketekst="Gå til dialog"
                lenke={`${CONTEXT_PATH}/aktivitetsplan/dialog`}
            />
            <LenkeMedInfo
                visible={true}
                ikon={<MalIkon/>}
                tittel="Mål"
                beskrivelse="Legg til målet ditt, slik at vi kan veilede deg bedre."
                lenketekst="Gå til mål"
                lenke="/aktivitetsplan/mal/endre"
            />
        </ul>
    );
};

export default InformasjonsLenker;
