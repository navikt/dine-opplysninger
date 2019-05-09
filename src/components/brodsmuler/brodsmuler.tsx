import * as React from 'react';
import Lenke from 'nav-frontend-lenker';
import personSvg from './person.svg';
import './brodsmuler.less';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { ORDINAER, RegistreringDataType } from '../../datatyper/registreringData';

const DITTNAV_PATH = '/dittnav';
const VEIENTILARBEID_PATH = '/veientilarbeid';

const Brodsmuler = (props: RegistreringDataType) => {
    const {type} = props;
    return (
        <div className="brodsmuler">
            <img src={personSvg} className="brodsmuler__illustrasjon"/>
            <ol className="brodsmuler__list typo-normal">
                <li className="brodsmuler__item">
                    <Lenke href={DITTNAV_PATH}>
                        Ditt NAV
                    </Lenke>
                </li>
                <li className="brodsmuler__item">
                    <Lenke href={VEIENTILARBEID_PATH}>
                        {
                            type === ORDINAER
                                ? 'Veien til arbeid'
                                : 'Veiledning'
                        }
                    </Lenke>
                </li>
                <li className="brodsmuler__item">
                    Veiledningsinformasjon
                </li>
            </ol>
        </div>
    );
};

export default registreringDataContextConsumerHoc<{}>(Brodsmuler);