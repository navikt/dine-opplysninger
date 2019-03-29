import React from 'react';
import ReactDOM from 'react-dom';
import FremtidigSituasjon from './FremtidigSituasjon';
import Enzyme from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FremtidigSituasjon />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe(FremtidigSituasjon, () => {
    const cssBtnLeggTil = '#btn-legg-til-situasjon';

    it('Skal vise legg til knapp', () => {
        const wrapper = Enzyme.shallow(<FremtidigSituasjon/>);
        const btnLeggTil = wrapper.find(cssBtnLeggTil);
        expect(btnLeggTil.prop('hidden')).toEqual(false);
    });

    it('Skal ikke vise alternativer', () => {
        const wrapper = Enzyme.shallow(<FremtidigSituasjon/>);
        const collapse = wrapper.find('Collapse');
        expect(collapse.prop('isOpened')).toEqual(false);
    });

    it('Skal vise alternativer når man trykker på legg til knapp', () => {
        const wrapper = Enzyme.shallow(<FremtidigSituasjon/>);
        const btnLeggTil = wrapper.find(cssBtnLeggTil);

        btnLeggTil.simulate('click');

        const collapse = wrapper.find('Collapse');
        expect(collapse.prop('isOpened')).toEqual(true);
    });

    it('Skal skjule legg til knapp ', () => {
        const wrapper = Enzyme.shallow(<FremtidigSituasjon/>);
        const btnLeggTil = wrapper.find(cssBtnLeggTil);

        btnLeggTil.simulate('click');
        expect(wrapper.find(cssBtnLeggTil).prop('hidden')).toEqual(true);
    });
});