import * as React from 'react';
import { registreringDataContextConsumerHoc } from '../../context/registreringData/RegistreringDataProvider';
import { RegistreringDataType } from '../../datatyper/registreringData';
import './Registreringsinfo.less';
import SvarIRegistrering from './hjelpekomponeneter/SvarIRegistrering';
import InformasjonsLenker from './hjelpekomponeneter/InformasjonsLenker/InformasjonsLenker';

function Registreringsinfo(props: RegistreringDataType) {
	const { type, registrering } = props;
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

export default registreringDataContextConsumerHoc<{}>(Registreringsinfo);
