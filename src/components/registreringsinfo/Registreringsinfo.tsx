import * as React from 'react';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import './Registreringsinfo.less';
import EndreRegistreringerMock from '../../mock/EndreRegistreringerMock';
import JobbprofilCV from './hjelpekomponeneter/jobbprofilCV';
import MoteReferater from './hjelpekomponeneter/moteReferater';
import Sykefravaer from './hjelpekomponeneter/sykefravaer';
import SvarIRegistrering from './hjelpekomponeneter/svarIRegistrering';

function Registreringsinfo(props: RegistreringDataType) {
    const {type, registrering} = props;
    return (
        <div className="registrerings-info">
            <EndreRegistreringerMock/>
            <JobbprofilCV type={type} fremtidigSituasjon={registrering.besvarelse.fremtidigSituasjon} />
            <MoteReferater />
            <Sykefravaer type={type} />
            <SvarIRegistrering registrering={registrering}/>
        </div>
    );
}

export default registreringDataContextConsumerHoc<{}>(Registreringsinfo);
