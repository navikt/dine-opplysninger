import * as React from 'react';
import {useContext} from 'react';
import './hensyn.less';
import {RegistreringDataContext, SisteSituasjonContext,} from '../../context/registreringData/RegistreringDataProvider';
import {SYKMELDT} from '../../datatyper/registreringData';
import {oppdaterAndreHinder, oppdaterHelseHinder} from '../../api/api';
import JaNeiPanel from './jaNeiPanel';
import {JaNeiIkke} from "../../datatyper/situasjon";

function Hensyn() {
    const registrering = useContext(RegistreringDataContext);
    const sisteSituasjon = useContext(SisteSituasjonContext);

    const sykemeldt = registrering.type === SYKMELDT;
    const andreTekst = sykemeldt ? 'Andre hensyn NAV bør ta' : 'Andre problemer';
    const skuleAndreForhold = sykemeldt && (
            !registrering.registrering.besvarelse.andreForhold ||
            registrering.registrering.besvarelse.andreForhold === 'INGEN_SVAR'
    );

    return (
        <section className="hensyn">
            <JaNeiPanel
                titel="Helseproblemer"
                hidden={sykemeldt}
                start={sisteSituasjon.helseHinder ? sisteSituasjon.helseHinder.verdi : JaNeiIkke.INGEN_SVAR}
                onSave={(svar) => oppdaterHelseHinder(svar)}
            />
            <JaNeiPanel
                titel={andreTekst}
                hidden={skuleAndreForhold}
                start={sisteSituasjon.andreHinder ? sisteSituasjon.andreHinder.verdi : JaNeiIkke.INGEN_SVAR}
                onSave={(svar) => oppdaterAndreHinder(svar)}
            />
        </section>
    );
}

export default Hensyn;