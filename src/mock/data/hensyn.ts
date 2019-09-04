
export function oppdaterHensyn(verdi: boolean) {
	return {
		verdi,
		dato: new Date().toISOString()
	};
}
