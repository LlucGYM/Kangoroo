import React, {useState, useEffect} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../logo192.png';
import '../CSS/NavBar.css';

export default function NavBar () {
    const [variant, setVariant] = useState('');
    const [offset, setOffset] = useState(0);

    useEffect(() => {
            if (offset >= window.screen.height/5) {
                setVariant('#fffec3');
            }else {
                setVariant("");
            }
            window.onscroll = () => {
                setOffset(window.pageYOffset);
            }
        },
        [offset]);



return (
    <div>
        <Navbar id={"Navegador"}  style={{background: variant}} expand="lg" fixed="top">
            <div className="container">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    TU KANGURO!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse   id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0 nav-fi"
                        navbarScroll
                    >
                        <Nav.Link href="/"><strong>Inicio</strong></Nav.Link>
                        <Nav.Link href="/Reservas"><strong>Reservas</strong></Nav.Link>
                        <Nav.Link href="/SobreNosotros"><strong>Sobre Nosotros</strong></Nav.Link>
                        <Nav.Link href="/ComoSerKanguro"><strong>¿Como ser Kanguro?</strong></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </div>
);
}
