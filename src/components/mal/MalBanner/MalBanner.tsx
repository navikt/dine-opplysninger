import * as React from 'react';
import './MalBanner.less';
import InfoSvg from './svg/info';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Lukknapp from 'nav-frontend-lukknapp';
import { useState } from 'react';
function MalBanner () {
    const localStorage = window.localStorage;
    const visMalBanner = localStorage.getItem('visMalBanner');
    const [vis, setVis] = useState(visMalBanner);

    if (vis !== null) {
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
                    const skalVise = 'true';
                    localStorage.setItem('visMalBanner', skalVise);
                    setVis(skalVise);
                }}
            />
        </div>
    );
}

export default MalBanner;
