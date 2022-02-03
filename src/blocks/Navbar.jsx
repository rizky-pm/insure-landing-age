import React from 'react';
import styled from 'styled-components';

import { Image } from '../elements/Image';
import { UL, LI } from '../elements/UnorderedList';

import InsureLogo from '../images/logo.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import CloseIcon from '../images/icon-close.svg';
import { LinkTag } from '../elements/LinkTag';

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
                        largeDevicesDisplay='none'
                        onClick={hamburgerHandler}
                        alt='Open menu icon'
                    />
                    <UL smallDevicesDisplay='none'>
                        <LI navbar>
                            <LinkTag navbar href='#'>
                                How we work
                            </LinkTag>
                        </LI>
                        <LI navbar>
                            <LinkTag navbar href='#'>
                                Blog
                            </LinkTag>
                        </LI>
                        <LI navbar>
                            <LinkTag navbar href='#'>
                                Account
                            </LinkTag>
                        </LI>
                        <LI navbar viewPlans>
                            <LinkTag navbar href='#'>
                                View Plans
                            </LinkTag>
                        </LI>
                    </UL>
                </Menu>
            </Split>
        </Nav>
    );
};

const Nav = styled.nav`
    background-color: ${(props) => props.theme.colors.neutralVeryLightGray};
    padding: 30px 25px;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 20px 25px;
    }
`;

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Menu = styled.div``;

export default Navbar;
