import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import './style.css';

export default function FooterThree() {
    return (
        <section className="container-flid bg-[var(--text-black)]">
            <Container>

                <div className="footer-three">
                    <span>COPYRIGHT © 2024 - ALL RIGHTS RESERVED</span>
                </div>

            </Container>
        </section>
    )
}
