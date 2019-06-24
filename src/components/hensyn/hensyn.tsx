import * as React from 'react';
import { useContext } from 'react';
import './hensyn.less';
import { RegistreringDataContext, SisteSituasjonContext, } from '../../context/registreringData/RegistreringDataProvider';
import { oppdaterAndreHinder, oppdaterHelseHinder } from '../../api/api';
import JaNeiPanel from './jaNeiPanel';
import { JaNeiIkke } from '../../datatyper/situasjon';
import { INFOOMMEG_ENDREANDREHINDER, INFOOMMEG_ENDREHELSEHINDER, loggEndret } from '../../metrikker/frontendlogger';

function Hensyn() {
    const sisteSituasjon = useContext(SisteSituasjonContext);
    const registreringsData = useContext(RegistreringDataContext);
    const initHelseproblemer = sisteSituasjon.helseHinder ? sisteSituasjon.helseHinder.verdi : JaNeiIkke.INGEN_SVAR;
    const initAndreproblemer = sisteSituasjon.andreHinder ? sisteSituasjon.andreHinder.verdi : JaNeiIkke.INGEN_SVAR;
    return (
        <section className="hensyn">
            <JaNeiPanel
                titel="Helseproblemer"
                start={initHelseproblemer}
                onSave={(svar) => {
                    loggEndret(INFOOMMEG_ENDREHELSEHINDER, registreringsData, sisteSituasjon.helseHinder, svar, sisteSituasjon);
                    return oppdaterHelseHinder(svar);
                }}
            />
            <JaNeiPanel
                titel="Andre problemer"
                start={initAndreproblemer}
                onSave={(svar) => {
                    loggEndret(INFOOMMEG_ENDREANDREHINDER, registreringsData, sisteSituasjon.andreHinder, svar, sisteSituasjon);

                    return oppdaterAndreHinder(svar);
                }}
            />
        </section>
    );
}

export default Hensyn;