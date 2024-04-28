import React from 'react';
import HeaderMain from '@/components/header/header';
import Contact from '@/components/contact';

import GoogleMap from '@/components/google-map';

import Partners from '@/components/partners';
import FooterOne from '@/components/footerOne';
import FooterTwo from '@/components/footerTwo';
import FooterThree from '@/components/footerThree';

export default function page() {
    return (
        <div className='container-fluid'>
            
            <HeaderMain color="fixed" />

            <Contact />
            
            <GoogleMap />
            
            <Partners />
            
            <FooterOne/>
            
            <FooterTwo />
            
            <FooterThree />

        </div>
    )
}
