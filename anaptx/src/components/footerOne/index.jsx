import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import './style.css';

export default function FooterOne() {
    return (
        <section className="container-flid bg-[var(--primary-blue)]">
            <Container>

                <div className="footer-one flex justify-between">

                    <div className="logo">
                        <Image alt="" src={'/logo.svg'} width={ 0 } height={ 0 } style={{width:'200px',height:'60px'}} />
                    </div>
                    
                    <div className="social flex align-middle">
                        <ul className="flex justify-between align-middle items-center">
                            <li>
                                <Image alt="" src={'/assets/common/facebook.svg'} width={0} height={0} style={{width:'36px',height:'36px'}} />
                            </li>
                            <li>
                                <Image alt="" src={'/assets/common/instagram.svg'} width={0} height={0} style={{width:'36px',height:'36px'}} />
                            </li>
                            <li>
                                <Image alt="" src={'/assets/common/twiter.svg'} width={0} height={0} style={{width:'36px',height:'36px'}} />
                            </li>
                            <li>
                                <Image alt="" src={'/assets/common/linkedin.svg'} width={0} height={0} style={{width:'36px',height:'36px'}} />
                            </li>
                        </ul>
                    </div>

                </div>

            </Container>
        </section>
    )
}
