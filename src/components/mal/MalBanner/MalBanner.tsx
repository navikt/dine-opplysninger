import * as React from 'react';
import './MalBanner.less';
import InfoSvg from './svg/info';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
function MalBanner () {
    return(
        <div className="mal-banner">
            <InfoSvg/>
            <Normaltekst className="mal-banner-beskrivelse">
                Legg til målet ditt, slik at vi kan veilede deg bedre.
            </Normaltekst>
        </div>
    );
}

export default MalBanner;
