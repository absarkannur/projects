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
                heading="Immersive In-Game"
                image={ '/assets/inner-pages/bg2.png' } />

            <InnerBannerHeader
                sub_heading={"Blended In-Game"}
                heading={"Advertising Platform"}
                paragraph={"Dive into the future of advertising with our immersive in-game solutions. Captivate your audience within their favorite gaming environments, delivering seamless brand experiences that resonate. Harness the power of gaming to engage with consumers in a whole new way, driving brand awareness and interaction like never before. Elevate your marketing strategy with immersive in-game advertising that puts your brand at the forefront of the gaming world."} />

            <section className="container-fluid bg-[url('/assets/inner-pages/immersive/feature-bg.png')] bg-center bg-no-repeat bg-cover">
                <Container>
                    <div className="features-reach">

                        <div className="box">
                            <h2 className="h2">reach</h2>
                            <h1 className="h1">200M+</h1>
                            <h2 className="h2">Players In Hundreds Of Mobile Games Globally</h2>
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
                                            alt="" src={'/assets/inner-pages/immersive/icon-1.svg'} width={0} height={0} />
                                    </div>
                                </div>
                                <p className="p">Non-Intrusive</p>
                            </li>
                            <li>
                                <div className="imagethmb">
                                    <div className="imagethmb_inner">
                                        <Image 
                                            className="h-[100px] w-[100px]"
                                            alt="" src={'/assets/inner-pages/immersive/icon-2.svg'} width={0} height={0} />
                                    </div>
                                </div>
                                <p className="p">Highly Visible</p>
                            </li>
                            <li>
                                <div className="imagethmb">
                                    <div className="imagethmb_inner">
                                        <Image 
                                            className="h-[100px] w-[100px]"
                                            alt="" src={'/assets/inner-pages/immersive/icon-3.svg'} width={0} height={0} />
                                    </div>
                                </div>
                                <p className="p">Brand Safe Ads</p>
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
