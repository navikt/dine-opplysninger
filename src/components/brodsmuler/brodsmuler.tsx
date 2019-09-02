import React from 'react';
import Lenke from 'nav-frontend-lenker';
import { CONTEXT_PATH } from '../../utils/constants';
import personSvg from './person.svg';
import './brodsmuler.less';

const DITTNAV_PATH = `${CONTEXT_PATH}/dittnav`;

const Brodsmuler = () => {
	return (
		<div className="brodsmuler">
			<img src={personSvg} className="brodsmuler__illustrasjon" alt="" />
			<ol className="brodsmuler__list typo-normal">
				<li className="brodsmuler__item">
					<Lenke href={DITTNAV_PATH}>Ditt NAV</Lenke>
				</li>
				<li className="brodsmuler__item">Dine opplysninger</li>
			</ol>
		</div>
	);
};

export default Brodsmuler;
