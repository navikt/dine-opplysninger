import * as React from 'react';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import './Registreringsinfo.less';
import EndreRegistreringerMock from '../../mock/EndreRegistreringerMock';
import JobbprofilCV from "./hjelpekomponeneter/jobbprofilCV";
import MoteReferater from "./hjelpekomponeneter/moteReferater";
import Sykefravaer from "./hjelpekomponeneter/sykefravaer";
import SvarIRegistrering from "./hjelpekomponeneter/svarIRegistrering";


function Registreringsinfo(props: RegistreringDataType) {
    return (
        <div className="registrerings-info">
            <EndreRegistreringerMock/>
            <JobbprofilCV type={props.type} fremtidigSituasjon={props.registrering.besvarelse.fremtidigSituasjon} />
            <MoteReferater />
            <Sykefravaer type={props.type} />
            <SvarIRegistrering registrering={props.registrering}/>
        </div>
    );
}

export default registreringDataContextConsumerHoc<{}>(Registreringsinfo);
