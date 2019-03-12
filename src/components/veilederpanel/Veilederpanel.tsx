import * as React from 'react';
import './Veilederpanel.less';
import Veilederpanel from 'nav-frontend-veilederpanel';
import veilederSvg from './veileder-syfo.svg';
import { teksterVeilederBanner } from '../registreringsinfo/tekster';

function VeilederBanner () {
    let veilederpanelKompakt;
    let veilederpanelType: 'normal' | 'plakat';

    if (window.matchMedia('(min-width: 768px)').matches) {
        veilederpanelKompakt = true;
        veilederpanelType = 'normal';
    } else {
        veilederpanelKompakt = false;
        veilederpanelType = 'plakat';
    }

    return(
        <div className="veileder-banner">
            <Veilederpanel
                type={veilederpanelType}
                kompakt={veilederpanelKompakt}
                svg={<img src={veilederSvg}/>}
            >
                {teksterVeilederBanner.veilederBanner}
            </Veilederpanel>
        </div>
    );
}

export default VeilederBanner;