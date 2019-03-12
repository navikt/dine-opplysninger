import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import './Registreringsinfo.less';
import { registreringsInfoConfig } from './config';
import EndreRegistreringerMock from '../../mock/EndreRegistreringerMock';
import { teksterTilLenker } from './tekster';
const moment = require('moment');

function Registreringsinfo(props: RegistreringDataType) {
    return (
        <div className="registrerings-info">
            <EndreRegistreringerMock/>
            {
                registreringsInfoConfig(props).map((gruppe) => {
                    if (gruppe === null) {
                        return null;
                    }

                    const opprettet = moment(props.registrering.opprettetDato).format('DD. MMMM YYYY');
                    return (
                        <section key={gruppe.gruppeTittel} className="registrerings-info__gruppe">
                            <Innholdstittel tag="h2" className="gruppe-tittel">{gruppe.gruppeTittel}</Innholdstittel>
                            <Normaltekst>
                                <FormattedMessage
                                    id="gruppeBeskrivelse"
                                    defaultMessage={gruppe.gruppeBeskrivelse}
                                    values={{
                                        registrertDato: opprettet,
                                        infoVeilLenke: <a href={teksterTilLenker.informereVeilederenHref} className="lenke">{teksterTilLenker.informereVeilederenLenke}</a>
                                    }}
                                />
                            </Normaltekst>
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
