import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from './blocks/Navbar';
import Menu from './blocks/Menu';
import Header from './blocks/Header';
import AboutUs from './blocks/AboutUs/AboutUs';
import More from './blocks/More';
import Footer from './blocks/Footer/Footer';

function App() {
    const [showMenu, setShowMenu] = useState(false);
    // test

    return (
        <Container showMenu={showMenu}>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <Menu showMenu={showMenu} />
            <Header />
            <AboutUs />
            <More />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    position: ${(props) => (props.showMenu ? 'fixed' : 'static')};
`;

export default App;
