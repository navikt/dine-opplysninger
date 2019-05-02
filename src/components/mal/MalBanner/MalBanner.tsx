import * as React from 'react';
import './MalBanner.less';
import InfoSvg from './svg/info';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
function MalBanner () {
    return(
        <div className="mal-banner">
            <InfoSvg/>
            <Normaltekst className="mal-banner-beskrivelse">
                Beskriv målet ditt og hva du mener må til for å nå det. Da kan veilederen din gi deg riktigere veiledning.
            </Normaltekst>
        </div>
    );
}

export default MalBanner;
