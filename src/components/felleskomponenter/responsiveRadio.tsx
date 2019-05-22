import { RadioPanelGruppe, RadioPanelGruppeProps } from 'nav-frontend-skjema';
import * as React from 'react';
import classNames from 'classnames';
import './responsiveRadio.less';

function ResponsiveRadioGruppe(props: RadioPanelGruppeProps) {
    const {className, ...rest} = props;
    return (
        <RadioPanelGruppe className={classNames(className, 'responsivRadio')} {...rest} />
    );
}

export default ResponsiveRadioGruppe;