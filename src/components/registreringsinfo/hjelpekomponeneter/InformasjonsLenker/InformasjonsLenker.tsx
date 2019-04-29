import * as React from 'react';
import CvIkon from './svg/cv';
import JobbprofilIkon from './svg/jobbprofil';
import MotereferatIkon from './svg/motereferat';
import SykfravarIkon from './svg/sykfravar';
import './InformasjonsLenker.less';
import LenkeMedInfo from './LenkeMedInfo';
import { SYKMELDT } from '../../../../datatyper/registreringData';

const InformasjonsLenker = (props: {type: string, fremtidigSituasjon: string | null}) => {
    const skalViseCvOgJobbprofil = props.type !== SYKMELDT || props.fremtidigSituasjon === 'NY_ARBEIDSGIVER' || props.fremtidigSituasjon === 'USIKKER';
    return (
        <ul className="informasjons-lenker">
            <LenkeMedInfo
                visible={skalViseCvOgJobbprofil}
                ikon={<CvIkon/>}
                tittel="CV"
                beskrivelse="Hold opplysningene oppdatert for å få riktig veiledning."
                lenketekst="Gå til din CV"
                lenke="https://arbeidsplassen.nav.no/cv"
            />
            <LenkeMedInfo
                visible={skalViseCvOgJobbprofil}
                ikon={<JobbprofilIkon/>}
                tittel="Jobbprofil"
                beskrivelse="Legg inn ønsker og krav for fremtidige jobber."
                lenketekst="Gå til din jobbprofil"
                lenke="https://arbeidsplassen.nav.no"
            />
            <LenkeMedInfo
                visible={true}
                ikon={<MotereferatIkon/>}
                tittel="Møtereferater"
                beskrivelse="Møtene mellom deg og veilederen din."
                lenketekst="Se referatene"
                lenke="/sykefravaer"
            />
            <LenkeMedInfo
                visible={props.type === SYKMELDT}
                ikon={<SykfravarIkon/>}
                tittel="Ditt sykefravær"
                beskrivelse="Sykemeldinger, oppfølgingsplaner og annen relevant informasjon om sykefraværet ditt."
                lenketekst="Gå til ditt sykefravær"
                lenke="/sykefravaer"
            />
        </ul>
    );
}

export default InformasjonsLenker;