'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';


// Site components
import ButtonBlue from '@/components/button/ButtonBlue';
import ButtonWhite from '../button/ButtonWhite';

export default function HeaderMain( props ) {

    
    const [isFixed, setIsFixed] = useState(false);
    const scrollThreshold = 600;

    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    })
    
    const handleScroll = () => {
        
        if( window.scrollY >= scrollThreshold ){
            setIsFixed( true );
        } else {
            setIsFixed( false );
        }

    }

    return (
        <section 
            className={ ( props.color === 'fixed' ) ? 'header-color-blue' : 'header-color-transparent' }
            style={{height: '76px'}}>
            <Navbar 
                expand="lg" 
                fixed={ isFixed ? 'top': '' }
                bg="dark" 
                data-bs-theme="dark"
                className={ ( isFixed ) ? 'bg-body-tertiary pt-2 pb-2 header-color-blue' : 'bg-body-tertiary pt-2 pb-2 header-color-transparent' }
                style={{ zIndex: 9999999 }}>

                <Container>
                
                    <Navbar.Brand href="/">
                        <Image src={'/logo.svg'} alt="" width={0} height={0} style={{ width: '180px', height: '50px' }} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="font-raleway">

                            <Nav.Link href="/about">About us</Nav.Link>

                            <NavDropdown title="Solutions" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/omni-channel-programmatic">Omni-channel Programmatic</NavDropdown.Item>
                                <NavDropdown.Item href="/immersive-in-game">Immersive In-Game</NavDropdown.Item>
                                <NavDropdown.Item href="/conversational-ads">Conversational Ads</NavDropdown.Item>
                                <NavDropdown.Item href="/separated-link">Separated link</NavDropdown.Item>
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
        </section>
    )
}
