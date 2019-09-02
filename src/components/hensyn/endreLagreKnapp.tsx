import LenkeKnapp from '../felleskomponenter/lenkeknap';
import * as React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';

function EndreLagreKnapp(props: { endre: boolean; oppdaterer: boolean; onClick: () => void }) {
	if (props.oppdaterer) {
		return (
			<LenkeKnapp disabled={true}>
				{' '}
				<NavFrontendSpinner type="S" />{' '}
			</LenkeKnapp>
		);
	}
	return <LenkeKnapp onClick={props.onClick}>{props.endre ? 'Lagre' : 'Endre'}</LenkeKnapp>;
}

export default EndreLagreKnapp;
