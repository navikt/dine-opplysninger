import * as React from 'react';

interface KnappegruppeProps {
    onSave: () => void;
    onCancel: () => void;
}

export function KnappeGruppe(props: KnappegruppeProps) {
    return (
        <div className="knappegruppe">
            <button className="typo-element lenke-knapp" onClick={() => props.onCancel()}>Avbryt</button>
            <button className="typo-element lenke-knapp" onClick={() => props.onSave()}>Lagre</button>
        </div>
    );
}