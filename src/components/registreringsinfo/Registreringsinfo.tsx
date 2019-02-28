import * as React from 'react';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import './Registreringsinfo.less';

function Registreringsinfo(props: RegistreringDataType) {
    return (
        <div className="registrerings-info-container">
            <Normaltekst>Følgende informasjon bruker veilederen din for å vurdere dine behov</Normaltekst>
            <Innholdstittel tag="h2">Svar i registrering</Innholdstittel>
            <ul>
                <li className="typo-normal"><strong>Situasjon&nbsp;</strong>

                    {
                        props.registrering.teksterForBesvarelse.forEach((spm) => {
                            if (spm.sporsmalId === 'dinSituasjon') {
                                return <div>{spm.svar}</div>;
                            } else {
                                return null;
                            }
                        })
                    }
                </li>
            </ul>
        </div>
    );
}

export default registreringDataContextConsumerHoc<{}>(Registreringsinfo);