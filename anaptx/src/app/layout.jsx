import { Suspense } from 'react';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

// Google Fonts
import { raleway, bebas } from '@/utils/fonts.jsx';


export const metadata = {
    title: "anaptx.io | Full-Stack Ad-Tech platform",
    description: "Anaptyx is a full-stack ad tech platform designed to empower brands and agencies to target, deliver, and analyze their digital advertising efforts efficiently.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={ `${raleway.variable} ${bebas.variable}` }>
            <body>
                <Suspense fallback={<div className="loader"></div>}>
                    {children}
                </Suspense>
            </body>
        </html>
    );
}
