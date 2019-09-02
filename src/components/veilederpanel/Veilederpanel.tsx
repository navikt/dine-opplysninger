import * as React from 'react';
import './Veilederpanel.less';
import Veilederpanel from 'nav-frontend-veilederpanel';
import veilederSvg from './veileder.svg';

function VeilederBanner() {
	return (
		<div className="veileder-banner">
			<Veilederpanel type="plakat" kompakt={true} svg={<img src={veilederSvg} alt="" />}>
				Veilederen din bruker opplysningene under for å vurdere hvor mye veiledning du trenger. Sørg derfor for
				at opplysningene er oppdaterte.
			</Veilederpanel>
		</div>
	);
}

export default VeilederBanner;
