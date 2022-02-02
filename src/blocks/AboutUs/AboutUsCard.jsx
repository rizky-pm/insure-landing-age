import React from 'react';
import styled from 'styled-components';

import { H3 } from '../../elements/Heading';
import { Paragraph } from '../../elements/Paragraph';

import SnappyProccessIcon from '../../images/icon-snappy-process.svg';
import AffordablePricesIcon from '../../images/icon-affordable-prices.svg';
import PeopleFirstIcon from '../../images/icon-people-first.svg';
import { Image } from '../../elements/Image';

const AboutUsCard = (props) => {
    const { title, desc } = props;
    let icon;

    switch (title) {
        case 'Snappy Process':
            icon = SnappyProccessIcon;
            break;
        case 'Affordable Prices':
            icon = AffordablePricesIcon;
            break;
        case 'People First':
            icon = PeopleFirstIcon;
            break;
        default:
            break;
    }

    return (
        <Container>
            <Image src={icon} alt={desc + 'icon'} />
            <H3 marginTop='40px'>{title}</H3>
            <Paragraph marginTop='25px' darkColor>
                {desc}
            </Paragraph>
        </Container>
    );
};

const Container = styled.div`
    &:not(first-of-type) {
        margin-top: 60px;
    }
`;

export default AboutUsCard;
