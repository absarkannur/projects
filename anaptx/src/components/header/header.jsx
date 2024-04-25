'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';


// Site components
import ButtonBlue from '@/components/button/ButtonBlue';
import ButtonWhite from '../button/ButtonWhite';

export default function HeaderMain( props ) {
    return (
        <Navbar 
            expand="lg" 
            fixed={ props.sticky }
            bg="light" 
            data-bs-theme="light"
            className={ "bg-body-tertiary pt-4 pb-4 " + props.colorClass } 
            style={{ zIndex: 9999999 }}>

            <Container>
            
                <Navbar.Brand href="#home">
                    <Image src={'logo.svg'} alt="" width={0} height={0} style={{ width: '180px', height: '50px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav className="font-raleway">

                        <Nav.Link href="#home">About us</Nav.Link>

                        <NavDropdown title="Solutions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Omni-channel Programmatic</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Immersive In-Game</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Conversational Ads</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#link">Case Studies</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <ButtonBlue
                            href="/contact-us" value="Contact Us" />
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}
