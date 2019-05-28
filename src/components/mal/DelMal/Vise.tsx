import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { teksterMaal } from '../tekster';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Element from 'nav-frontend-typografi/lib/element';
import GrunnPanel from '../../felleskomponenter/grunnPanel';
import { FetchStateTypes } from '../Hovedmal';

interface ViseProps {
    malState: string;
    fetchStatus: FetchStateTypes;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}

const Vise = (props: ViseProps) => {
    const { fetchStatus, malState } = props;
    const mal = malState.length === 0 ? teksterMaal.default : malState;
    return (
        <GrunnPanel className="del-mal" border={true} feil={fetchStatus === FetchStateTypes.FAILURE}>
            <Element className="del-mal-tittel">{teksterMaal.delMalTittel}</Element>

            {fetchStatus === FetchStateTypes.FAILURE ?
                <Normaltekst className="feil"> Feil ved henting av forklaring og delmål. Prøv på nytt senere.</Normaltekst> : null
            }

            {fetchStatus === FetchStateTypes.LOADING ?
                <NavFrontendSpinner/> : null
            }

            {fetchStatus === FetchStateTypes.OK ?
                <>
                    <Normaltekst className="del-mal-beskrivelse">{mal}</Normaltekst>
                    <div className="knappegruppe">
                        <button
                            className="typo-element lenke-knapp"
                            onClick={() => props.setSkalEndreState(true)}
                        >
                            Endre
                        </button>
                    </div>
                </> : null
            }
        </GrunnPanel>
    );
};

export default Vise;
