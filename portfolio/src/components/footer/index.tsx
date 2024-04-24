import React from 'react';
import Image from 'next/image';
import Wrapper from "@/components/wrapper";
import Link from 'next/link';

export default function Footer() {

    const links = [
        { name: "Linkedin", link: "https://www.linkedin.com/in/muhammed-absar-35a82265/" },
        { name: "Instagram", link: "https://www.instagram.com/abs___i/" },
        { name: "Email", link: "mailto:absarkannur@gmail.com" },
    ]

    return (
        <Wrapper>
            <div className="block">
                <h1 className="font-sans font-[800] w-full text-[30px] sm:text-[36px] md:text-[36px] lg:text-[36px] xl:text-[36px] h-[80px] leading-[80px]">Let's Get in Touch</h1>
                <div>
                    <ul className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
                        {
                            links.map((item, i ) => <li className="font-sans font-[600] w-[150px]">
                                <Link target='_blank' href={ item.link }>
                                    <Image alt="i" src={'/arrow.png'} width={26} height={26} className="float-left mr-5" />
                                    { item.name }
                                </Link>
                            </li> )
                        }
                    </ul>
                </div>
                <span className="font-sans text-[16px] text-gray-900 h-[60px] leading-[60px]">Designed and coded by <b>Absar</b> <span className="font-sans text-[18px] text-red-600">♥️</span></span>
            </div>
        </Wrapper>
    )
}
