import React from 'react';
import './Mal.less';
import DelMal from './DelMal/DelMal';
import Hovedmal from './Hovedmal';
import Malhistorikk from './Malhistorikk/Malhistorikk';
import MalBanner from './MalBanner/MalBanner';

function Mal() {
	return (
		<section className="mal-container">
			<MalBanner />
			<Hovedmal />
			<DelMal />
			<Malhistorikk />
		</section>
	);
}

export default Mal;
