import * as React from 'react';
import './Knappegruppe.less';

interface KnappegruppeProps {
    onSave: () => void;
    onCancel: () => void;
}

export function KnappeGruppe(props: KnappegruppeProps) {
    return (
        <div className="knappegruppe">
            <a role="button" className="typo-element lenke" onClick={() => props.onCancel()}>Avbryt</a>
            <a role="button" className="typo-element lenke" onClick={() => props.onSave()}>Lagre</a>
        </div>
    );
}