import * as React from 'react';
import './Mal.less';
import Systemtittel from 'nav-frontend-typografi/lib/systemtittel';
import DelMal from './DelMal';

export interface MalType {
    mal: string;
    endretAv: string;
    dato: string;
}

function Mal () {

    return(
        <section className="mal-container">
            <Systemtittel>Mål</Systemtittel>
            <DelMal/>
        </section>
    );
}

export default Mal;