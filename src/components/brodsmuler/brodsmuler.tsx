import * as React from 'react';
import Lenke from 'nav-frontend-lenker';
import personSvg from './person.svg';
import './brodsmuler.less';

const DITTNAV_PATH = '/dittnav';
const VEIENTILARBEID_PATH = '/veientilarbeid';

const Brodsmuler = () => {
    return (
        <div className="brodsmuler">
            <img src={personSvg} alt="person-illustrasjon" className="brodsmuler__illustrasjon"/>
            <ol className="brodsmuler__list">
                <li className="brodsmuler__item typo-normal">
                    <Lenke href={DITTNAV_PATH}>
                        Ditt NAV
                    </Lenke>
                </li>
                <li className="brodsmuler__item typo-normal">
                    <Lenke href={VEIENTILARBEID_PATH}>
                        Veiledning
                    </Lenke>
                </li>
                <li className="brodsmuler__item typo-normal">
                    Veiledningsinformasjon
                </li>
            </ol>
        </div>
    );
};

export default Brodsmuler;
