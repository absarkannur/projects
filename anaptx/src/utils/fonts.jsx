
import { Raleway, Bebas_Neue } from 'next/font/google';

export const raleway = Raleway({
    subsets: ['latin'],
    weight: ['100','200','300','400','500','600','700','800','900'],
    variable: '--font-raleway'
});

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas'
})