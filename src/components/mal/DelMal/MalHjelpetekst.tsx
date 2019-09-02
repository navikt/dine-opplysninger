import Hjelpetekst from 'nav-frontend-hjelpetekst';
import * as React from 'react';

export function MalHjelpetekst() {
    return(
        <div className="hjelpetekst-info">
            <Hjelpetekst
                id="hjelpetekst-maal"
                type="midt"
                tittel="test"
            >
                <span className="hjelpetekst-maal-tittel">Eksempler:</span>
                <span className="hjelpetekst-maal-list">
                        <span className="hjelpetekst-maal-list-item">
                            Jeg ønsker å ta fagbrev, som vil gjøre det lettere å komme i fast jobb. For å klare dette må jeg først ta opp noen fag, så finne en lærlingplass.
                        </span>
                        <span className="hjelpetekst-maal-list-item">
                            Jeg ønsker å fortsette i jobben jeg har, men kan ikke jobbe mer enn 40 prosent. For å kunne fortsette i jobben må jeg snakke med arbeidsgiveren min.
                            Jeg må også høre med NAV om hjelp til å tilrettelegge arbeidsplassen.
                        </span>
                        <span className="hjelpetekst-maal-list-item">
                            Jeg ønsker å jobbe med mennesker. Fordi jeg har slitt litt med angst og har noen hull i CV-en,
                            trenger jeg hjelp til å finne en arbeidsgiver som er villig til å gi meg en sjanse.
                            Jeg tenker kanskje å ta en utdanning i helsefag senere.
                        </span>
                    </span>
            </Hjelpetekst>
        </div>
    );
}
