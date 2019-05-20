import * as React from 'react';
import { useContext } from 'react';
import './hensyn.less';
import {
    RegistreringDataContext, SisteSituasjonContext,
} from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType, SYKMELDT } from '../../datatyper/registreringData';
import { oppdaterAndreHinder, oppdaterHelseHinder } from '../../api/api';
import JaNeiPanel from './jaNeiPanel';
import { SisteSituasjon } from '../../datatyper/situasjon';

export interface HensynType {
    verdi: boolean;
    dato: string;
}

function helsehinderSvar(registrering: RegistreringDataType | null, situasjon: SisteSituasjon) {
    if(!registrering || !registrering.registrering) {
        if(!situasjon.helseHinder) {
            return false;
        }
        return situasjon.helseHinder.verdi;
    }

    if (!situasjon.helseHinder || registrering.registrering.opprettetDato > situasjon.helseHinder.dato) {
        return registrering.registrering.besvarelse.helseHinder === 'JA';
    } 
    return situasjon.helseHinder.verdi;
}

function andreSvar(registrering: RegistreringDataType, situasjon: SisteSituasjon) {
    if(!registrering || !registrering.registrering) {
        if(!situasjon.andreHinder) {
            return false;
        }
        return situasjon.andreHinder.verdi;
    }

    if (!situasjon.andreHinder || registrering.registrering.opprettetDato > situasjon.andreHinder.dato) {
        return registrering.registrering.besvarelse.andreForhold === 'JA';
    }
    return situasjon.andreHinder.verdi;
}

function Hensyn() {
    const registrering = useContext(RegistreringDataContext);
    const sisteSituasjon = useContext(SisteSituasjonContext);

    const sykemeldt = registrering.type === SYKMELDT;
    const andreTekst = sykemeldt ? 'Andre hensyn NAV bør ta' : 'Andre problemer';
    const skuleAndreForhold = sykemeldt && !registrering.registrering.besvarelse.andreForhold;

    return (
        <section className="hensyn">
            <JaNeiPanel
                titel="Helseproblemer"
                hidden={sykemeldt}
                start={helsehinderSvar(registrering, sisteSituasjon)}
                onSave={(svar) => oppdaterHelseHinder(svar)}
            />
            <JaNeiPanel
                titel={andreTekst}
                hidden={skuleAndreForhold}
                start={andreSvar(registrering, sisteSituasjon)}
                onSave={(svar) => oppdaterAndreHinder(svar)}
            />
        </section>
    );
}

export default Hensyn;