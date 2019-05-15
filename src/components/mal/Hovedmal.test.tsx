import React from 'react';
import ReactDOM from 'react-dom';
import { getNyesteHovedmal, Hovedmal } from './Hovedmal';
import Enzyme from 'enzyme';
import { ORDINAER, RegistreringsType } from '../../datatyper/registreringData';
import { HovedmalAlternativ } from '../registreringsinfo/Alternativer';

describe(Hovedmal, () => {
    const cssBtnLeggTil = '#btn-legg-til-situasjon';
    let registrering: RegistreringsType;

    it('rendrer uten å krasje', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hovedmal registrering={registrering} type={ORDINAER}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Skal vise "Legg til" knapp', () => {
        const wrapper = Enzyme.shallow(<Hovedmal registrering={registrering} type={ORDINAER}/>);
        const btnLeggTil = wrapper.find(cssBtnLeggTil);
        expect(btnLeggTil.prop('hidden')).toEqual(false);
    });

    it('Skal ikke vise alternativer', () => {
        const wrapper = Enzyme.shallow(<Hovedmal registrering={registrering} type={ORDINAER}/>);
        const collapse = wrapper.find('Collapse');
        expect(collapse).toHaveLength(0);
    });

    it('Skal vise alternativer når man trykker på legg til knapp', () => {
        const wrapper = Enzyme.shallow(<Hovedmal registrering={registrering} type={ORDINAER}/>);
        const btnLeggTil = wrapper.find(cssBtnLeggTil);

        btnLeggTil.simulate('click');

        const collapse = wrapper.find('Collapse');
        expect(collapse.prop('isOpened')).toEqual(true);
    });

    it('Skal skjule "Legg til" knapp når man trykker på den', () => {
        const wrapper = Enzyme.shallow(<Hovedmal registrering={registrering} type={ORDINAER}/>);
        const btnLeggTil = wrapper.find(cssBtnLeggTil);

        btnLeggTil.simulate('click');
        expect(wrapper.find(cssBtnLeggTil).prop('hidden')).toEqual(true);
    });

});

describe(getNyesteHovedmal, () => {
    let registrering: RegistreringsType;

    beforeEach(() => {
        registrering = {
            opprettetDato: '',
            manueltRegistrertAv: null,
            id: 0,
            profilering: {
                jobbetSammenhengendeSeksAvTolvSisteManeder: false,
                alder: 0,
                innsatsgruppe: ''
            },
            teksterForBesvarelse: [{
                sporsmalId: '',
                sporsmal: '',
                svar: '',
            }],
            besvarelse: {
                andreForhold: '',
                dinSituasjon: '',
                fremtidigSituasjon: '',
                helseHinder: '',
                sisteStilling: '',
                tilbakeIArbeid: '',
                utdanning: '',
                utdanningBestatt: '',
                utdanningGodkjent: ''
            },
        };
    });

    it('Nye sykmeldt registrerte skal vise fremtidig situasjon', () => {
        registrering.besvarelse.fremtidigSituasjon = 'NY_ARBEIDSGIVER';
        registrering.opprettetDato = '2019-04-02T16:17:14.017+01:00';
        const vedtakinfo = {
            alternativId: HovedmalAlternativ.IKKE_OPPGITT,
            endretAv: '',
            dato: '',
        };
        const hovedmal = getNyesteHovedmal(vedtakinfo, registrering);

        expect(hovedmal).toEqual(HovedmalAlternativ[registrering.besvarelse.fremtidigSituasjon]);

    });

    it('Tidligere sykmeldt registrerte skal vise hovedmål fra vedtakinfo', () => {
        registrering.besvarelse.fremtidigSituasjon = 'NY_ARBEIDSGIVER';
        registrering.opprettetDato = '2019-04-02T16:17:14.017+01:00';
        const vedtakinfo = {
            alternativId: HovedmalAlternativ.SAMME_ARBEIDSGIVER,
            endretAv: 'BRUKER',
            dato: '2019-05-02T16:17:14.017+01:00',
        };
        const hovedmal = getNyesteHovedmal(vedtakinfo, registrering);

        expect(hovedmal).toEqual(vedtakinfo.alternativId);

    });

    it('Nye ordinær registrerte skal vise hovedmål ikke oppgitt', () => {
        registrering.besvarelse.fremtidigSituasjon = null;
        registrering.opprettetDato = '2019-05-02T16:17:14.017+01:00';
        const vedtakinfo = {
            alternativId: HovedmalAlternativ.SAMME_ARBEIDSGIVER,
            endretAv: 'BRUKER',
            dato: '2019-04-02T16:17:14.017+01:00',
        };
        const hovedmal = getNyesteHovedmal(vedtakinfo, registrering);

        expect(hovedmal).toEqual(HovedmalAlternativ.IKKE_OPPGITT);

    });

    it('Tidligere ordinær registrerte skal vise hovedmål fra vedtakinfo', () => {
        registrering.besvarelse.fremtidigSituasjon = null;
        registrering.opprettetDato = '2019-04-02T16:17:14.017+01:00';
        const vedtakinfo = {
            alternativId: HovedmalAlternativ.SAMME_ARBEIDSGIVER,
            endretAv: 'BRUKER',
            dato: '2019-05-02T16:17:14.017+01:00',
        };
        const hovedmal = getNyesteHovedmal(vedtakinfo, registrering);

        expect(hovedmal).toEqual(vedtakinfo.alternativId);

    });
});
