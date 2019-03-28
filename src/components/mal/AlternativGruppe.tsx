import { useEffect, useState } from 'react';
import { SituasjonAlternativ } from '../registreringsinfo/Alternativer';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import * as React from 'react';

interface AlternativContainerProps {
    lagretSvar: string;
    onSave: (valg: string) => void;
    onCancel: () => void;
}

export function AlternativGruppe (props: AlternativContainerProps) {
    const [svar, setSvar] = useState(props.lagretSvar);
    const rdioAlternativer = Object.keys(SituasjonAlternativ)
        .filter(x => SituasjonAlternativ[x] !== SituasjonAlternativ.IKKE_OPPGITT)
        .map(alternativ => {
                return {
                    value: alternativ,
                    label: SituasjonAlternativ[alternativ]
                };
            }
        );

    useEffect(() => {
        setSvar(props.lagretSvar);
    }, [props.lagretSvar]);

    function onCancel() {
        props.onCancel();
        setSvar(props.lagretSvar);
    }

    return (
        <>
            <RadioPanelGruppe
                name="alternativ-gruppe"
                legend=""
                radios={rdioAlternativer}
                checked={svar}
                onChange={(event, value) => setSvar(value)}
            />
            <div className="lenke-element knappegruppe">
                <a role="button" className="typo-element lenke" onClick={() => onCancel()}>Avbryt</a>
                <a role="button" className="typo-element lenke" onClick={() => props.onSave(svar)}>Lagre</a>
            </div>
        </>
    );
}