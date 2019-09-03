import React from 'react';
import './Mal.less';
import DelMal from './del-mal/DelMal';
import Hovedmal from './Hovedmal';
import Malhistorikk from './historikk/Malhistorikk';
import MalBanner from './banner/MalBanner';

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
