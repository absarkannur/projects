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
                heading="Omini Chanelomni-channel-programmatic"
                image={ '/assets/inner-pages/bg1.png' } />

            <InnerBannerHeader
                sub_heading={"cross device"}
                heading={"display & video"}
                paragraph={"Revolutionize your advertising strategy with our omnichannel programmatic solutions. Seamlessly reach your target audience across various platforms, devices, and channels, all while optimizing your budget and maximizing ROI. Gain unparalleled insights and control over your campaigns with our cutting-edge technology. Elevate your brand presence and drive results like never before with our omnichannel programmatic advertising."} 
            />

            <section className="container-fluid bg-[var(--light-background)]">
                <Container>
                    <div className="omin-features">
                        <ul className="list">
                            <li>
                                <div className="layer">
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner">
                                            <Image 
                                                className="h-[100px] w-[100px]"
                                                alt="" src={'/assets/inner-pages/omni/icon-1.svg'} width={0} height={0} />
                                        </div>
                                    </div>
                                    <p className="p">Powerful full stack ad-platform for agencies</p>
                                </div>
                            </li>
                            <li>
                                <div className="layer">
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner">
                                            <Image 
                                                className="h-[100px] w-[100px]"
                                                alt="" src={'/assets/inner-pages/omni/icon-2.svg'} width={0} height={0} />
                                        </div>
                                    </div>
                                    <p className="p">Transparent managed and/or self service</p>
                                </div>
                            </li>
                            <li>
                                <div className="layer">
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner">
                                            <Image 
                                                className="h-[100px] w-[100px]"
                                                alt="" src={'/assets/inner-pages/omni/icon-3.svg'} width={0} height={0} />
                                        </div>
                                    </div>
                                    <p className="p">High focus on innovation and new channels</p>
                                </div>
                            </li>
                            <li>
                                <div className="layer">
                                    <div className="imagethmb">
                                        <div className="imagethmb_inner">
                                            <Image 
                                                className="h-[80px] w-[80px]"
                                                alt="" src={'/assets/inner-pages/omni/icon-4.svg'} width={0} height={0} />
                                        </div>
                                    </div>
                                    <p className="p">All inclusive: DSP, DMP, SSP, custom media creatives</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            <Highlight />

            <section className="container-fluid overflow-hidden bg-[var(--primary-dark-blue)] relative">
                <Container>
                    <div className="target-options">

                        <div className="content-section">
                            <h1 className="h1">targeting options</h1>
                            <p className="p">Our enriched user data will give you more opportunities to segment users and will meet your direct needs. You’ll create and store different audiences with different interests and attributes  age, gender, interest, location, etc. . Stored audiences can be re-used for future campaigns. </p>
                        </div>

                        <div className="list-section">

                            <div className="box">

                                <span className="heading capitalize">Behavioral</span>

                                <ul className="list">
                                    <li>Consumer interests</li>
                                    <li>Retargeting</li>
                                    <li>User lists</li>
                                    <li>Visited locations</li>
                                    <li>Geofencing areas</li>
                                    <li>Socio-economic class</li>
                                </ul>
                            </div>

                            <div className="box">

                                <span className="heading capitalize">Placement</span>

                                <ul className="list">
                                    <li>Exchanges</li>
                                    <li>Apps/Sites</li>
                                    <li>Position</li>
                                    <li>Time</li>
                                </ul>
                            </div>

                            <div className="box">

                                <span className="heading capitalize">Technology</span>

                                <ul className="list">
                                    <li>Browser</li>
                                    <li>Operating System</li>
                                    <li>Operator</li>
                                    <li>3G/4G/WiFi</li>
                                    <li>Device brand and model</li>
                                    <li>Device price range</li>
                                </ul>
                            </div>

                            <div className="box">

                                <span className="heading capitalize">Demographics</span>

                                <ul className="list">
                                    <li>Consumer interests</li>
                                    <li>Retargeting</li>
                                    <li>User lists</li>
                                    <li>Visited locations</li>
                                    <li>Geofencing areas</li>
                                    <li>Socio-economic class</li>
                                </ul>
                            </div>
                            
                        </div>

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
