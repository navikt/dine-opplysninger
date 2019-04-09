import * as React from 'react';
import './Veilederpanel.less';
import Veilederpanel from 'nav-frontend-veilederpanel';
import veilederSvg from './veileder-syfo.svg';

function VeilederBanner () {
    let veilederpanelType: 'normal' | 'plakat' = 'plakat';

    if (window.matchMedia('(min-width: 768px)').matches) {
        veilederpanelType = 'normal';
    }

    return(
        <div className="veileder-banner">
            <Veilederpanel
                type={veilederpanelType}
                kompakt={true}
                svg={<img src={veilederSvg}/>}
            >
                Veilederen din bruker følgende informasjon for å vurdere behovene dine for veiledning.
            </Veilederpanel>
        </div>
    );
}

export default VeilederBanner;
