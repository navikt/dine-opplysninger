import { useState } from 'react';
import { HovedmalAlternativ } from '../registreringsinfo/Alternativer';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import * as React from 'react';
import { KnappeGruppe } from './Knappegruppe';

interface AlternativContainerProps {
    lagretSvar: string;
    onSave: (valg: string) => void;
    onCancel: () => void;
}

export function AlternativGruppe (props: AlternativContainerProps) {
    const [svar, setSvar] = useState(props.lagretSvar);
    const alternativer = Object.keys(HovedmalAlternativ)
        .filter(x => HovedmalAlternativ[x] !== HovedmalAlternativ.IKKE_OPPGITT)
        .map(alternativ => {
                return {
                    value: alternativ,
                    label: HovedmalAlternativ[alternativ]
                };
            }
        );

    function onCancel() {
        props.onCancel();
        setSvar(props.lagretSvar);
    }

    return (
        <>
            <RadioPanelGruppe
                name="alternativ-gruppe"
                legend=""
                radios={alternativer}
                checked={svar}
                onChange={(event, value) => setSvar(value)}
            />
            <KnappeGruppe onSave={() => props.onSave(svar)} onCancel={() => onCancel()}/>

        </>
    );
}