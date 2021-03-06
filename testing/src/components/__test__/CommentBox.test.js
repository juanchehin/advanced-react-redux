import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    console.log('pasa beforeEach');
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>
    );
});

afterEach(() => {
    console.log('pasa afterEach');
    wrapped.unmount();
});


describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('has a text area and button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    // Prueba que el area de texto se vacie cuando se haga clic en el boton enviar
    // Debemos simular un evento en el propio formulario
    it('Text area empty before the clic', () => {
        // Cargo un valor al textarea
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        wrapped.update();

        // Verifico el cambio en el form
        wrapped.find('form').simulate('submit');
        
        wrapped.update();
        // Chequeo que el textarea este vacio
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});