import { useState } from 'react';
import createUseContext from 'constate';
import { SisteSituasjon } from '../api/data/situasjon';
import { RegistreringDataType } from '../api/data/registrering-data';
import { OppfolgingStatusType } from '../api/api';

export const useAppStore = createUseContext(() => {
	const [situasjon, setSituasjon] = useState<SisteSituasjon>({} as SisteSituasjon);
	const [registrering, setRegistrering] = useState<RegistreringDataType>({} as RegistreringDataType);
	const [oppfolgingStatus, setOppfolgingStatus] = useState<OppfolgingStatusType>({} as OppfolgingStatusType);

	return {
		situasjon, setSituasjon,
		registrering, setRegistrering,
		oppfolgingStatus, setOppfolgingStatus
	};
});
