import * as React from 'react';
import { CONTEXT_PATH } from '../utils/constants';

const lagMockRegistreringUrl = (registreringType: string): string => {
	return `${CONTEXT_PATH}/?registrering=${registreringType}`;
};

function EndreRegistreringerMock() {
	if (!process.env.REACT_APP_MOCK) {
		return null;
	}
	return (
		<div style={{ border: '1px solid #eee', padding: '0 1rem', marginBottom: '2rem' }}>
			<p>
				<strong>Demo</strong>: Endre registreringsinformasjon
			</p>
			<ul>
				<li>
					<a href={lagMockRegistreringUrl('OrdinaerHarMistetJobben')} className="lenke">
						Ordinær: Har mistet jobben
					</a>
				</li>
				<li>
					<a href={lagMockRegistreringUrl('OrdinaerMistetJobbenIngenUtdanning')} className="lenke">
						Ordinær: Har mistet jobben, har ingen utdanning
					</a>
				</li>
				<li>
					<a href={lagMockRegistreringUrl('OrdinaerHarJobbOnskerFortsette')} className="lenke">
						Ordinær: Har jobb og ønsker å fortsette
					</a>
				</li>
				<li>&nbsp;</li>
				<li>
					<a href={lagMockRegistreringUrl('SykmeldtSammeArbeidsgiverFullStilling')} className="lenke">
						Sykmeldt: Skal tilbake til jobben jeg har
					</a>
				</li>
				<li>
					<a href={lagMockRegistreringUrl('SykmeldtNyArbeidsgiverIngenUtdanning')} className="lenke">
						Sykmeldt: Trenger ny jobb, har ingen utdanning
					</a>
				</li>
				<li>
					<a href={lagMockRegistreringUrl('SykmeldtUsikker')} className="lenke">
						Sykmeldt: Usikker
					</a>
				</li>
				<li>
					<a href={lagMockRegistreringUrl('SykmeldtIngenPasser')} className="lenke">
						Sykmeldt: Ingen alternativene passer
					</a>
				</li>
			</ul>
		</div>
	);
}

export default EndreRegistreringerMock;
