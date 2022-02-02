import React from 'react';
import styled from 'styled-components';

const Link = ({ text }) => {
    return (
        <LI>
            <LinkTag href='#'>{text}</LinkTag>
        </LI>
    );
};

const LI = styled.li`
    &:first-of-type {
        margin-top: 40px;
    }

    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

const LinkTag = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryDarkViolet};

    &:hover {
        text-decoration: underline;
    }
`;

export default Link;
