
import { Open_Sans, Roboto, Dancing_Script, Pacifico } from 'next/font/google';

export const robotoFont = Roboto({
    subsets: ['latin'],
    weight: [ "100" , "300" , "400" , "500" , "700" , "900" ],
    variable: '--font-roboto',
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: [ '300', '400','500','600','700','800' ],
    variable: '--font-opensans',
})

export const dancingScript = Dancing_Script({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    variable: '--font-dancing'
})

export const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-pacifico',
})