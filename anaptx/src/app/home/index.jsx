'use client';
import React from 'react';
import Image from 'next/image';

import HeaderMain from '@/components/header';
import Container from 'react-bootstrap/Container';
import ButtonBlue from '@/components/button/ButtonBlue';
import ButtonWhite from '@/components/button/ButtonWhite';

// Styles
import './style.css';

export default function Page() {
    return (
        <div className="container-fluid">

            <HeaderMain />

            <section className="home-banner">

                {/* Video Background */}
                <video autoPlay loop muted>
                    <source src={ 'assets/home/5224-183786646.mp4' } type="video/mp4" />
                </video>

                {/* Banner Content */}
                <div className="banner-box">
                    <Container>
                        <div className="inner-content">
                            <h1 className="h1">​​The Full-Stack <span>Ad-Tech</span> platform <br/>with full-funnel approach.</h1>
                            <p className="p">Anaptx is a full-stack ad tech platform designed to empower brands and agencies to target, deliver, and
    analyze their digital advertising efforts efficiently.</p>
                        </div>
                    </Container>
                </div>

            </section>

            <section className="container-fluid">
                <Container>

                    <div className="info-box">

                        <div className="box">

                            <h2 className="h2">High-Impact</h2>
                            <h1 className="h1">Engaging Ad Formats</h1>
                            <p className='p'>Capture up to 10X more attention with highly engaging, dynamic and interactive ads. Capture the audience's attention through immersive in-game advertisements and conversational ads crafted with AI technology to maximize engagement.</p>
                            <ButtonBlue
                                width={180}
                                icon={ '/assets/common/arrow-right.svg' }
                                value="LEARN MORE"
                                href="#" />

                        </div>
                        
                    </div>

                </Container>
            </section>

            <section className="container-fluid">
                <Container>

                    <div className="brand-metrics">

                        <div className="box">

                            <h1 className="h1">Brand Lift Metrics</h1>

                            <ul className='flex justify-between p-2'>
                                <li>
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner flex justify-center">
                                            <Image src={'/assets/home/brand-metrics/Icon 1.svg'} width={60} height={60} />
                                        </div>
                                    </div>
                                    <span>Brand Favorability</span>
                                </li>
                                <li>
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner flex justify-center">
                                            <Image src={'/assets/home/brand-metrics/Icon 2.svg'} width={60} height={60} />
                                        </div>
                                    </div>
                                    <span>Ad Recall</span>
                                </li>
                                <li>
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner flex justify-center">
                                            <Image src={'/assets/home/brand-metrics/Icon 3.svg'} width={60} height={60} />
                                        </div>
                                    </div>
                                    <span>Brand Recall</span>
                                </li>
                                <li>
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner flex justify-center">
                                            <Image src={'/assets/home/brand-metrics/Icon 4.svg'} width={60} height={60} />
                                        </div>
                                    </div>
                                    <span>Purchase Intent</span>
                                </li>
                                <li>
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner flex justify-center">
                                            <Image src={'/assets/home/brand-metrics/Icon 5.svg'} width={60} height={60} />
                                        </div>
                                    </div>
                                    <span>Dwell Time</span>
                                </li>
                                <li>
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner flex justify-center">
                                            <Image src={'/assets/home/brand-metrics/Icon 6.svg'} width={60} height={60} />
                                        </div>
                                    </div>
                                    <span>Consideration</span>
                                </li>
                            </ul>

                        </div>

                    </div>

                </Container>
            </section>

            <section className="container-fluid bg-[var(--light-background)]">
                <Container>

                    <div className="solutions">

                        <ul className="solutions-list">
                            <li>
                                <div className="box bg-[var(--secondary-pink)]">
                                    <h2 className="h2">Omni-channel<br/>Programmatic</h2>
                                    <p className="p">Revolutionize your advertising strategy with our omnichannel programmatic solutions.</p>
                                    <ButtonWhite 
                                        width={180}
                                        href="#"
                                        icon="/assets/common/arrow-right-black.svg"
                                        value="LEARN MORE"/>
                                </div>
                            </li>
                            <li>
                                <div className="box bg-[var(--secondary-purple)]">
                                    <h2 className="h2">Immersive<br/>In-Game</h2>
                                    <p className="p">Dive into the future of advertising with our immersive in-game solutions</p>
                                    <ButtonWhite 
                                        width={180}
                                        href="#"
                                        icon="/assets/common/arrow-right-black.svg"
                                        value="LEARN MORE"/>
                                </div>
                            </li>
                            <li>
                                <div className="box bg-[var(--secondary-dark-purple)]">
                                    <h2 className="h2">Conversational<br/>Ads</h2>
                                    <p className="p">Step into the future of advertising with our AI-driven conversational ads.</p>
                                    <ButtonWhite 
                                        width={180}
                                        href="#"
                                        icon="/assets/common/arrow-right-black.svg"
                                        value="LEARN MORE"/>
                                </div>
                            </li>
                        </ul>

                    </div>

                </Container>
            </section>

            <section className="container-fluid">
                <Container>
                    <div className="targeting">

                        <h1 className="h1">Advanced Targeting & Global Reach</h1>
                        <p className="p">Reach 96% of the open web across 2.500+ targeting options.</p>

                        <div className="box">
                            Alla
                        </div>

                    </div>
                </Container>
            </section>

        </div>
    )
}
