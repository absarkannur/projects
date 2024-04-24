'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Wrapper from '../wrapper';

// Styles
import './style.css';


export default function Header() {
  
    const pathName = usePathname()
  
    const navs = [
        { name: 'Work', path: '/' },
        { name: 'Fun', path: '/fun' },
        { name: 'About', path: '/about' }
    ]

    return (
      <header className="bg-slate-50 overflow-hidden">
        <Wrapper >

            <div className="header-box">
                <div className="flex pt-5 pb-5 sm:pt-5 sm:pb-5 md:pt-10 md:pb-10 lg:pt-10 lg:pb-10 xl:pt-10 xl:pb-10 justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
                    <b className="font-bold text-3xl font-pacifico text-gray-900">absi.</b>
                </div>
            </div>
            <div className="header-box">
                <ul className="flex pt-5 pb-5 sm:pt-5 sm:pb-5 md:pt-10 md:pb-10 lg:pt-10 lg:pb-10 xl:pt-10 xl:pb-10 justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end">
                    {
                        navs.map( (item, id) => 
                        <li key={id} className={ ( pathName === item.path ) ? 'nav-custom-style active ' : 'nav-custom-style' }>
                            <Link href={ item.path }>{ item.name }</Link>
                        </li> )
                    }
                </ul>
            </div>

        </Wrapper>
      </header>
    )
}
