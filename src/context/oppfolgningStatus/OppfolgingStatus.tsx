import * as React from 'react';
import { hentOppfolgingStatus, OppfolgingStatusType } from '../../api/api';
import DataFetcher from '../../utils/dataFetcher';
import AlertStripeAdvarsel from 'nav-frontend-alertstriper/lib/advarsel-alertstripe';
import Lenke from 'nav-frontend-lenker';
import HoyreChevron from 'nav-frontend-chevron/lib/hoyre-chevron';

const ARBEIDSSOKERREGISTRERING_URL = '/arbeidssokerregistrering';

interface OppfolgingStatusProps {
    children: React.ReactNode;
}

function OppfolgingStatus(props: OppfolgingStatusProps) {
    return (
        <DataFetcher<OppfolgingStatusType> fetchFunc={hentOppfolgingStatus}>
            {(data: OppfolgingStatusType) => {
                if (!data.underOppfolging) {
                    return (
                        <div id="ikke-under-oppfolgning-container">
                            <AlertStripeAdvarsel className="ikke-under-oppfolgning-boks">
                                Du må være registrert hos NAV for å se informasjon om deg.
                                <br/> <Lenke href={ARBEIDSSOKERREGISTRERING_URL}>Registrer deg hos NAV <HoyreChevron/></Lenke>
                            </AlertStripeAdvarsel>
                        </div>
                    );
                }
                return props.children;
            }}
        </DataFetcher>
    );
}

export default OppfolgingStatus;