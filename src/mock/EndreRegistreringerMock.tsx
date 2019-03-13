import * as React from 'react';

function EndreRegistreringerMock() {

    if (!process.env.REACT_APP_MOCK) {
        return null;
    }
    return (
        <div style={{border: '1px solid #eee', padding: '0 1rem', marginBottom: '2rem'}}>
            <p>
                <strong>Demo</strong>: Endre registreringsinformasjon
            </p>
            <ul>
                <li>
                    <a href="/?registrering=SykmeldtSammeArbeidsgiverFullStilling" className="lenke">Sykmeldt: skal tilbake til jobben jeg har</a>
                </li>
                <li>
                    <a href="/?registrering=SykmeldtNyArbeidsgiverHarUtdanning" className="lenke">Sykmeldt: trenger ny jobb, har utdanning</a>
                </li>
                <li>
                    <a href="/?registrering=SykmeldtNyArbeidsgiverIngenUtdanning" className="lenke">Sykmeldt: trenger ny jobb, har ingen utdanning</a>
                </li>
                <li>
                    <a href="/?registrering=SykmeldtIngenPasser" className="lenke">Sykmeldt: ingen alternativer passer</a>
                </li>
                <li>
                    <a href="/?registrering=OrdinaerMistetJobbenIngenUtdanning" className="lenke">Ordinær: mistet jobben, har ingen utdanning</a>
                </li>
                <li>
                    <a href="/?registrering=OrdinaerHarJobbOnskerFortsette" className="lenke">Ordinær: har jobb og ønsker å fortsette</a>
                </li>
                <li>
                    <a href="/?registrering=OrdinaerHarMistetJobben" className="lenke">Ordinær: har mistet jobben</a>
                </li>
            </ul>
        </div>
    );
}

export default EndreRegistreringerMock;
