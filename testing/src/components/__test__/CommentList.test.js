import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from 'Root';

let wrapper;

beforeEach(() => {
    wrapper = mount( <
        Root >
        <
        CommentList comments = {
            ['asdga', 'asdasd'] }
        /> <
        /Root>
    );
});

it('creates one LI per comment', () => {

})