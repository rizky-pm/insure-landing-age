import React from 'react';
import styled from 'styled-components';

import { BorderedTopH1 } from '../../elements/Heading';
import AboutUsCard from './AboutUsCard';

import { aboutUsData } from '../../data';

const AboutUs = () => {
    return (
        <Container>
            <BorderedTopH1 borderTop>We're different</BorderedTopH1>
            {aboutUsData.map((data) => {
                return (
                    <AboutUsCard
                        key={data.title}
                        title={data.title}
                        desc={data.description}
                    />
                );
            })}
        </Container>
    );
};

const Container = styled.section`
    padding: 140px 25px;
    text-align: center;
`;

export default AboutUs;
