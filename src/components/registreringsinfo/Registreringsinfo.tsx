import * as React from 'react';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import './Registreringsinfo.less';
import { registreringsInfoConfig } from './utils';

function Registreringsinfo(props: RegistreringDataType) {
    return (
        <div className="registrerings-info-container">
            <Normaltekst>Følgende informasjon bruker veilederen din for å vurdere dine behov</Normaltekst>
            <Innholdstittel tag="h2">Svar i registrering</Innholdstittel>
            <ul>
                {
                    registreringsInfoConfig(props).map((regInfo) => {
                        return regInfo.element;
                    })
                }
            </ul>
        </div>
    );
}

export default registreringDataContextConsumerHoc<{}>(Registreringsinfo);
