import * as React from 'react';
import './MalBanner.less';
import InfoSvg from './svg/info';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Lukknapp from 'nav-frontend-lukknapp';
import { useState } from 'react';
function MalBanner () {
    const [vis, setVis] = useState(true);

    if (!vis) {
        return null;
    }
    return(
        <div className="mal-banner">
            <InfoSvg/>
            <Normaltekst className="mal-banner-beskrivelse">
                Beskriv målet ditt og hva du mener må til for å nå det. Da kan veilederen din gi deg riktigere veiledning.
            </Normaltekst>
            <Lukknapp
                className="mal-banner-lukkknapp"
                onClick={() => {
                    setVis(!vis);
                }}
            />
        </div>
    );
}

export default MalBanner;
