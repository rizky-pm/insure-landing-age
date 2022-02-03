import React from 'react';

import { LI } from '../../elements/UnorderedList';
import { LinkTag } from '../../elements/LinkTag';

const Link = ({ text }) => {
    return (
        <LI>
            <LinkTag href='#'>{text}</LinkTag>
        </LI>
    );
};

export default Link;
