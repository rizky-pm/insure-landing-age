import React from 'react';
import styled from 'styled-components';

import MenuBackground from '../images/bg-pattern-mobile-nav.svg';

const Menu = (props) => {
    return (
        <Container showMenu={props.showMenu}>
            <UL showMenu={props.showMenu}>
                <LI>
                    <LinkTag href='#'>How we work</LinkTag>
                </LI>
                <LI>
                    <LinkTag href='#'>Blog</LinkTag>
                </LI>
                <LI>
                    <LinkTag href='#'>Account</LinkTag>
                </LI>
                <LI>
                    <LinkTag href='#'>View Plans</LinkTag>
                </LI>
            </UL>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: ${(props) => (props.showMenu ? '90vh' : '0')};
    /* background-color: ${(props) =>
        props.theme.colors.neutralVeryDarkViolet}; */
    background: url(${MenuBackground}),
        ${(props) => props.theme.colors.neutralVeryDarkViolet};

    background-repeat: no-repeat;
    background-position: bottom;
    z-index: 2;
    transition: all 1s;
`;

const UL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-align: center;
    padding: 50px 0;
    transform: ${(props) =>
        props.showMenu ? 'translateY(0)' : 'translateY(-100vh)'};
    transition: all 1s;
`;

const LI = styled.li.attrs({
    className: 'hahaha',
})`
    display: block;
    text-transform: uppercase;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    font-size: 22px;
    width: 90%;
    color: ${(props) => props.theme.colors.neutralVeryLightGray};

    &:not(:first-of-type) {
        margin-top: 15px;
    }
`;

const LinkTag = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 15px 0;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid white;
    }
`;

export default Menu;
