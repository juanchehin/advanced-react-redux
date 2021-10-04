import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
    const div = document.create('div'); // div 'falso' para poder ejecutar pruebas sin el navegador

    ReactDOM.render(<App/>,div);

    ReactDOM.unmountComponentAtNode(div);
});