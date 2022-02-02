import React from 'react';
import styled from 'styled-components';

import { Image } from '../elements/Image';

import InsureLogo from '../images/logo.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import CloseIcon from '../images/icon-close.svg';

const Navbar = (props) => {
    const { showMenu, setShowMenu } = props;

    const hamburgerHandler = () => {
        setShowMenu((prevState) => !prevState);
    };

    return (
        <Nav>
            <Split>
                <Image src={InsureLogo} alt='Insure Logo' />
                <Menu>
                    <Image
                        src={!showMenu ? HamburgerIcon : CloseIcon}
                        onClick={hamburgerHandler}
                        alt='Open menu icon'
                    />
                </Menu>
            </Split>
        </Nav>
    );
};

const Nav = styled.nav`
    background-color: ${(props) => props.theme.colors.neutralVeryLightGray};
    padding: 30px 25px;
`;

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Menu = styled.div``;

export default Navbar;
