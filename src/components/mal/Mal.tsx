import * as React from 'react';
import './Mal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import DelMal from './DelMal/DelMal';
import FremtidigSituasjon from './FremtidigSituasjon';
import Malhistorikk from './Malhistorikk/Malhistorikk';

function Mal () {

    return(
        <section className="mal-container">
            <Systemtittel className="mal-tittel">Mål</Systemtittel>
            <Malhistorikk/>
            <FremtidigSituasjon/>
            <DelMal/>
        </section>
    );
}

export default Mal;