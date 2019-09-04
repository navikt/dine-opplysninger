import React from 'react';
import classNames from 'classnames';
import './LenkeKnapp.less';

function LenkeKnapp(props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
	const { className, ...rest } = props;
	return <button className={classNames(className, 'typo-element', 'lenke-knapp')} {...rest} />;
}

export default LenkeKnapp;
