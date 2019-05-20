import ResponsiveRadioGruppe from '../felleskomponenter/responsiveRadio';
import { default as React } from 'react';

const ja = 'Ja';
const nei = 'Nei';

function JaNeiRadio(props: {titel: string, valg: boolean, onChange: (selected: boolean) => void
}) {
    return(
        <ResponsiveRadioGruppe
            radios={
                [
                    {label: 'Ja', value: ja},
                    {label: 'Nei', value: nei},
                ]
            }
            name={props.titel}
            legend=""
            checked={props.valg ? ja : nei}
            onChange={(event, value) => props.onChange(value === ja)}
        />
    );
}

export default JaNeiRadio;