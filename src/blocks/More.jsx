import React from 'react';
import styled from 'styled-components';

import MoreBackgroundPattern from '../images/bg-pattern-how-we-work-mobile.svg';

import { GhostButton } from '../elements/Button';
import { H2 } from '../elements/Heading';

const More = () => {
    return (
        <Container>
            <InnerContainer>
                <H2 light>Find out more about how he work</H2>
                <GhostButton marginTop='45px'>How We Work</GhostButton>
            </InnerContainer>
        </Container>
    );
};

const Container = styled.section`
    padding: 25px;
    margin-bottom: 115px;
    text-align: center;
`;

const InnerContainer = styled.div`
    background: url(${MoreBackgroundPattern}),
        ${(props) => props.theme.colors.primaryDarkViolet};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    color: ${(props) => props.theme.colors.neutralVeryLightGray};
    padding: 70px 45px;
`;

export default More;
