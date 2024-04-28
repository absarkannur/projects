import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import './style.css';

export default function FooterTwo() {
    return (
        <section className="container-flid bg-[var(--primary-dark-blue)]">
            <Container>

                <div className="footer-two">
                    <div className="footer-box">
                        <h4 className="h4 uppercase">about</h4>

                        <ul className="links">
                            <li>A partner you can trust</li>
                            <li>Diversity, equity and inclusion</li>
                        </ul>

                    </div>
                    <div className="footer-box">
                        <h4 className="h4 uppercase">WHAT WE DO</h4>

                        <ul className="links">
                            <li>Media Solutions</li>
                            <li>Performance</li>
                            <li>In Game Advertisement</li>
                            <li>High Impact Branding</li>
                            <li>Analytics and tech solutions</li>
                            <li>In-housing Solutions</li>
                            <li>Creative solutions</li>
                        </ul>
                        
                    </div>
                    <div className="footer-box">
                        <h4 className="h4 uppercase">RESOURCES</h4>

                        <ul className="links">
                            <li>Research and insights</li>
                            <li>Blog</li>
                            <li>Case Studies</li>
                            <li>Privacy & Compliance</li>
                            <li>Privacy Policy</li>
                        </ul>

                    </div>
                    <div className="footer-box">
                        <h4 className="h4 uppercase">LIFE AT ANAPTYX</h4>

                        <ul className="links">
                            <li>Where we work</li>
                            <li>Careers</li>
                            <li>People</li>
                        </ul>

                    </div>
                </div>

            </Container>
        </section>
    )
}
