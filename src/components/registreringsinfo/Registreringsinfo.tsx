import * as React from 'react';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import './Registreringsinfo.less';
import { registreringsInfoConfig } from './config';

function Registreringsinfo(props: RegistreringDataType) {
    return (
        <div className="registrerings-info">
            <Normaltekst className="registrerings-info__tittel">Følgende informasjon bruker veilederen din for å vurdere dine behov</Normaltekst>
            {
                registreringsInfoConfig(props).map((gruppe) => {
                    if (gruppe === null) {
                        return null;
                    }
                    return (
                        <section key={gruppe.gruppeTittel} className="registrerings-info__gruppe">
                            <Innholdstittel tag="h2" className="gruppe-tittel">{gruppe.gruppeTittel}</Innholdstittel>
                            <ul className="gruppe-liste">
                                {
                                    gruppe.gruppeInnhold.map((innhold) => {
                                        return innhold.element;
                                    })
                                }
                            </ul>
                        </section>
                    );
                })
            }
        </div>
    );
}

export default registreringDataContextConsumerHoc<{}>(Registreringsinfo);
