import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const div = document.createElement('div');

    ReactDOM.render( < App / > , div);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    expect(div.innerHTML).toContain('Hi there!');

    ReactDOM.unmountComponentAtNode(div);
});