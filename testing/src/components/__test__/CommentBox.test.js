import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

it('has a text area and button', () => {
    const wrapper = mount(<CommentBox />);

    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});