import React from 'react';
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

export default function page() {
    return (
        <div className='container-fluid'>

            <HeaderMain color="fixed" />

            <InnerBanner
                heading="About Us"
                image={ '/assets/inner-pages/bg3.png' } />

            <InnerBannerHeader
                sub_heading={"cross device"}
                heading={"display & video"}
                paragraph={"Revolutionize your advertising strategy with our omnichannel programmatic solutions. Seamlessly reach your target audience across various platforms, devices, and channels, all while optimizing your budget and maximizing ROI. Gain unparalleled insights and control over your campaigns with our cutting-edge technology. Elevate your brand presence and drive results like never before with our omnichannel programmatic advertising."} 
            />

            {/* <section className="container-fluid bg-[var(--light-background)]">
                <Container>
                    <h1>Hello</h1>
                </Container>
            </section> */}

            <Partners/>
            <Contact/>

            <FooterOne />
            <FooterTwo />
            <FooterThree />

        </div>
    )
}
