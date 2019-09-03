import { RadioPanelGruppe, RadioPanelGruppeProps } from 'nav-frontend-skjema';
import React from 'react';
import classNames from 'classnames';
import './ResponsivRadio.less';

function ResponsivRadioGruppe(props: RadioPanelGruppeProps) {
	const { className, ...rest } = props;
	return <RadioPanelGruppe className={classNames(className, 'responsivRadio')} {...rest} />;
}

export default ResponsivRadioGruppe;
