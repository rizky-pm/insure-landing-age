import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const List = (props) => {
    const { title, menu } = props;
    const linkCollection = menu.links;

    return (
        <UL>
            <Span>{title}</Span>
            {linkCollection.map((data) => {
                return <Link key={data} text={data} />;
            })}
        </UL>
    );
};

const UL = styled.ul`
    list-style: none;

    &:not(:last-of-type) {
        margin-bottom: 45px;
    }
`;

const Span = styled.span`
    color: ${(props) => props.theme.colors.neutralDarkGrayishViolet};
`;

export default List;
