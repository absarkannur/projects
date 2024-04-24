import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Google Fonts
import { robotoFont, openSans, dancingScript, pacifico } from '@/utils/fonts';

// Global Style.css
import 'animate.css';
import './globals.css';
 
export const metadata: Metadata = {
	title: 'folio | Full Stack Developer',
	description: '...'
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en" className={ `${openSans.variable} ${dancingScript.variable} ${pacifico.variable}` }>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
