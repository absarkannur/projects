import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import HeaderMain from '@/components/header/header';
import InnerBanner from '@/components/inner-banner';
import InnerBannerHeader from '@/components/inner-banner-header';
import Highlight from '@/components/highlights';
import Partners from '@/components/partners';
import Contact from '@/components/contact';
import FooterOne from '@/components/footerOne';
import FooterTwo from '@/components/footerTwo';
import FooterThree from '@/components/footerThree';

import './style.css';

export default function page() {
    return (
        <section className="container-fluid">

            <HeaderMain color="fixed" />

            <InnerBanner
                heading="Conversational Ads"
                image={ '/assets/inner-pages/bg3.png' } />

            <InnerBannerHeader
                sub_heading={"CONVERSATIONAL DISPLAY ADS"}
                heading={"MAXIMIZE ENGAGEMENT"}
                paragraph={"A personalised, messaging-based user experience that’s intuitive for consumers. Conversational AI display ads utilize the #1 preferred method of communication for consumers: messaging. Built to IAB HTML5 standards for effortless integration into any programmatic buy, our conversational AI ad format delivers a level of engagement that traditional ads can’t match. Offering seamless compatibility with leading ad servers, DSPs, SSPs, and exchanges."} />

            <section className="container-fluid bg-[var(--light-background)]">
                <Container>
                    <div className="features-description">
                        <div className="box">
                            <h1 className="h1">
                                <b>Engage</b> prospects, <b>capture</b> leads, and drive <b>sales</b>
                            </h1>
                            <h2 className="h2">with conversational display ads.</h2>
                        </div>
                        <div className="box flex justify-center">
                            <Image
                                width={500} height={0}
                                alt="" src={ '/assets/inner-pages/conversational/conversational.png' } />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="container-fluid">
                <Container>
                    <div className="features-description">
                        <div className="box flex justify-center">
                            <Image
                                width={500} height={300}
                                alt="" src={ '/assets/inner-pages/conversational/conversational_display_ads.png' } />
                        </div>
                        <div className="box">
                            <h3 className="h3">ENGAGE YOUR AUDIENCE</h3>
                            <p className="p">conversational display ad format utilizes the #1 preferred method of communication for consumers: messaging.
Conversational AI gives consumers the specific information they’re looking for instantly, keeping them engaged and increasing the likelihood of taking action. It’s a personalized alternative to the ‘one size fits all’ approach of standard display ads and landing pages.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <Highlight />

            <section className="container-fluid bg-[var(--light-background)]">
                <Container>
                    <div className="features-info">
                        
                        <h4 className="h4">Benefit from unique blended in-game advertising solutions in the top mobile games worldwide. Never disrupt the gaming experience again - Become a part of it!</h4>

                        <ul className="list">
                            <li>
                                <div className="imagethmb">
                                    <div className="imagethmb_inner">
                                        <Image 
                                            className="h-[100px] w-[100px]"
                                            alt="" src={'/assets/inner-pages/conversational/icon-1.svg'} width={0} height={0} />
                                    </div>
                                </div>
                                <p className="p">Non-Intrusive</p>
                            </li>
                            <li>
                                <div className="imagethmb">
                                    <div className="imagethmb_inner">
                                        <Image 
                                            className="h-[100px] w-[100px]"
                                            alt="" src={'/assets/inner-pages/conversational/icon-2.svg'} width={0} height={0} />
                                    </div>
                                </div>
                                <p className="p">Highly Visible</p>
                            </li>
                            <li>
                                <div className="imagethmb">
                                    <div className="imagethmb_inner">
                                        <Image 
                                            className="h-[100px] w-[100px]"
                                            alt="" src={'/assets/inner-pages/conversational/icon-3.svg'} width={0} height={0} />
                                    </div>
                                </div>
                                <p className="p">Brand Safe Ads</p>
                            </li>
                        </ul>

                    </div>
                </Container>
            </section>

            <section className="container-fluid">
                <Container>
                    <div className="features-data">
                        
                        <h1 className="h1">Unlock valuable data</h1>

                        <div className="imagethmb">
                            <div className="imagethmb_inner">
                                <Image 
                                    width={600} height={0}
                                    alt="" src={'/assets/inner-pages/conversational/adchat-analytics-dashboard.png'}/>
                            </div>
                        </div>

                        <ul className="list">
                            <li>
                                <Image alt='' src={'/assets/common/check.svg'} width={26} height={26} />
                                <p className="p">Depth of Measurement</p>
                            </li>
                            <li>
                                <Image alt='' src={'/assets/common/check.svg'} width={26} height={26} />
                                <p className="p">Zero-party/Declared Data</p>
                            </li>
                            <li>
                                <Image alt='' src={'/assets/common/check.svg'} width={26} height={26} />
                                <p className="p">Active Attention/Time Spent</p>
                            </li>
                            <li>
                                <Image alt='' src={'/assets/common/check.svg'} width={26} height={26} />
                                <p className="p">CJ Measurement</p>
                            </li>
                        </ul>

                    </div>
                </Container>
            </section>

            <Partners/>
            <Contact/>
            <FooterOne />
            <FooterTwo />
            <FooterThree />

            
        </section>
    )
}
