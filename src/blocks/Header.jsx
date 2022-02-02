import React from 'react';
import styled from 'styled-components';

import { AbsoluteImage, Image } from '../elements/Image';
import { GhostButton } from '../elements/Button';
import { H1 } from '../elements/Heading';
import { Paragraph } from '../elements/Paragraph';

import MobileHeaderImage from '../images/image-intro-mobile.jpg';
import MobilePatternLeft from '../images/bg-pattern-intro-left-mobile.svg';
import MobilePatternRight from '../images/bg-pattern-intro-right-mobile.svg';

const Header = () => {
    return (
        <Container>
            <Image
                width='100%'
                height='100%'
                src={MobileHeaderImage}
                alt='Family holding hands together'
            />
            <TextSection>
                <AbsoluteImage
                    top='0'
                    left='0'
                    src={MobilePatternLeft}
                    alt='Curvy lines pattern'
                />
                <TextOverlay>
                    <H1>Humanizing your insurance.</H1>
                    <Paragraph marginTop='25px'>
                        Get your life insurance coverage easier and faster. We
                        blend our expertise and technology to help you find the
                        plan that’s right for you. Ensure you and your loved
                        ones are protected.
                    </Paragraph>
                    <GhostButton marginTop='35px'>View Plans</GhostButton>
                </TextOverlay>
                <AbsoluteImage
                    bottom='-35%'
                    right='0'
                    src={MobilePatternRight}
                    alt='Curvy lines pattern'
                />
            </TextSection>
        </Container>
    );
};

const Container = styled.header`
    background-color: ${(props) => props.theme.colors.primaryDarkViolet};
`;

const TextSection = styled.div`
    position: relative;
    color: ${(props) => props.theme.colors.neutralVeryLightGray};
    padding: 95px 27.5px;
    text-align: center;
`;

const TextOverlay = styled.div`
    position: relative;
    z-index: 1;
`;

export default Header;
