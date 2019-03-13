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
                    <a href="/?registrering=OrdinaerHarMistetJobben" className="lenke">Ordinær: Har mistet jobben</a>
                </li>
                <li>
                    <a href="/?registrering=OrdinaerMistetJobbenIngenUtdanning" className="lenke">Ordinær: Har mistet jobben, har ingen utdanning</a>
                </li>
                <li>
                    <a href="/?registrering=OrdinaerHarJobbOnskerFortsette" className="lenke">Ordinær: Har jobb og ønsker å fortsette</a>
                </li>
                <li>&nbsp;</li>
                <li>
                    <a href="/?registrering=SykmeldtSammeArbeidsgiverFullStilling" className="lenke">Sykmeldt: Skal tilbake til jobben jeg har</a>
                </li>
                <li>
                    <a href="/?registrering=SykmeldtNyArbeidsgiverIngenUtdanning" className="lenke">Sykmeldt: Trenger ny jobb, har ingen utdanning</a>
                </li>
                <li>
                    <a href="/?registrering=SykmeldtUsikker" className="lenke">Sykmeldt: Usikker</a>
                </li>
                <li>
                    <a href="/?registrering=SykmeldtIngenPasser" className="lenke">Sykmeldt: Ingen alternativene passer</a>
                </li>
            </ul>
        </div>
    );
}

export default EndreRegistreringerMock;
