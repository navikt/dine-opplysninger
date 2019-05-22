import * as React from 'react';
import { useContext } from 'react';
import './hensyn.less';
import { SisteSituasjonContext, } from '../../context/registreringData/RegistreringDataProvider';
import { oppdaterAndreHinder, oppdaterHelseHinder } from '../../api/api';
import JaNeiPanel from './jaNeiPanel';
import { JaNeiIkke } from '../../datatyper/situasjon';

function Hensyn() {
    const sisteSituasjon = useContext(SisteSituasjonContext);

    return (
        <section className="hensyn">
            <JaNeiPanel
                titel="Helseproblemer"
                start={sisteSituasjon.helseHinder ? sisteSituasjon.helseHinder.verdi : JaNeiIkke.INGEN_SVAR}
                onSave={(svar) => oppdaterHelseHinder(svar)}
            />
            <JaNeiPanel
                titel="Andre problemer"
                start={sisteSituasjon.andreHinder ? sisteSituasjon.andreHinder.verdi : JaNeiIkke.INGEN_SVAR}
                onSave={(svar) => oppdaterAndreHinder(svar)}
            />
        </section>
    );
}

export default Hensyn;