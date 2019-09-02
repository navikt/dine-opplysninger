import { format } from 'date-fns';

export function oppdaterHensyn(verdi: boolean) {
	return {
		verdi,
		dato: format(new Date())
	};
}
