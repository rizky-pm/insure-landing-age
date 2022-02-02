import React from 'react';
import styled from 'styled-components';

import FooterPatternMobile from '../../images/bg-pattern-footer-mobile.svg';
import BrandLogo from '../../images/logo.svg';
import { IconFacebook } from './IconFacebook';
import { IconTwitter } from './IconTwitter';
import { IconPinterest } from './IconPinterest';
import { IconInstagram } from './IconInstagram';

import { Image } from '../../elements/Image';
import List from './List';

import { linksData } from '../../data';

const Footer = () => {
    return (
        <Container>
            <SocialMediaContainer>
                <Image
                    src={BrandLogo}
                    alt='Insure logo'
                    width='115px'
                    height='20px'
                />
                <div>
                    <IconFacebook />
                    <IconTwitter />
                    <IconPinterest />
                    <IconInstagram />
                </div>
            </SocialMediaContainer>
            <LinksContainer>
                {linksData.map((data) => {
                    return (
                        <List
                            key={data.title}
                            title={data.title}
                            menu={data.menu}
                        />
                    );
                })}
            </LinksContainer>
        </Container>
    );
};

const Container = styled.footer`
    background: url(${FooterPatternMobile}),
        ${(props) => props.theme.colors.neutralVeryLightGray};
    padding: 85px 25px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SocialMediaContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 40px;

    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${(props) =>
            props.theme.colors.neutralDarkGrayishViolet};
    }

    div {
        width: 145px;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
`;

const LinksContainer = styled.div`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 40px;
`;

export default Footer;
