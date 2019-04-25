import * as React from 'react';
import './Veilederpanel.less';
import Veilederpanel from 'nav-frontend-veilederpanel';
import veilederSvg from './veileder.svg';

function VeilederBanner () {
    return(
        <div className="veileder-banner">
            <Veilederpanel
                type="plakat"
                kompakt={true}
                svg={<img src={veilederSvg}/>}
            >
                Her er en oversikt over informasjonen veilederen din bruker for å vurdere behovene dine for veiledning. Du bør holde den oppdatert for å få riktig oppfølging.
            </Veilederpanel>
        </div>
    );
}

export default VeilederBanner;
