import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it('has a text area and button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    });
    wrapper.update();
});