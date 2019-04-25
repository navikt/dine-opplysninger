import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { teksterMaal } from '../tekster';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import Element from 'nav-frontend-typografi/lib/element';

interface ViseProps {
    malState: string;
    laster: boolean;
    setSkalEndreState: Dispatch<SetStateAction<boolean>>;
}

const Vise = (props: ViseProps) => {
    const { laster, malState } = props;
    const mal = malState.length === 0 ? teksterMaal.default : malState;
    return (
        <>
            <Element className="del-mal-tittel">{teksterMaal.delMalTittel}</Element>
            <Normaltekst className="del-mal-beskrivelse">{mal}</Normaltekst>
            <div className="knappegruppe">
                {
                    laster
                        ? <NavFrontendSpinner/>
                        : <button
                            className="typo-element lenke-knapp"
                            onClick={() => props.setSkalEndreState(true)}
                        >
                            Endre
                        </button>
                }
            </div>
        </>
    );
};

export default Vise;
