import * as React from 'react';
import './Mal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import DelMal from './DelMal';
import FremtidigSituasjon from './FremtidigSituasjon';

function Mal () {

    return(
        <section className="mal-container">
            <Systemtittel>Mål</Systemtittel>
            <FremtidigSituasjon/>
            <DelMal/>
        </section>
    );
}

export default Mal;