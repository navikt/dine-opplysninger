import React from 'react';
import SvarIRegistrering from './hjelpekomponeneter/SvarIRegistrering';
import InformasjonsLenker from './hjelpekomponeneter/InformasjonsLenker/InformasjonsLenker';
import { useAppStore } from '../../stores/app-store';
import './Registreringsinfo.less';

function Registreringsinfo() {
	const { registrering: { registrering, type } } = useAppStore();
	return (
		<>
			<InformasjonsLenker
				type={type}
				fremtidigSituasjon={registrering ? registrering.besvarelse.fremtidigSituasjon : null}
			/>
			<SvarIRegistrering registrering={registrering} />
		</>
	);
}

export default Registreringsinfo;
