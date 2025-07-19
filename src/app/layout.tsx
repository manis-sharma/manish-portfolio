import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'
import AnimatedParticles from '@/components/shared/ui/Particles/AnimatedParticles'

const germanica = localFont({
	src: './fonts/Germanica.ttf',
	variable: '--font-germanica',
	weight: '500',
})





const slussenCompressedBlack = localFont({
	src: './fonts/Slussen-Compressed-Black.otf',
	variable: '--font-slussen-compressed-black',
	weight: '900',
})





const slussenExpendedBlack = localFont({
	src: './fonts/Slussen-Expanded-Black.otf',
	variable: '--font-slussen-expended-black',
	weight: '900',
})





const slussenMedium = localFont({
	src: './fonts/Slussen-Medium.otf',
	variable: '--font-slussen-medium',
	weight: '900',
})

const slussenRegular = localFont({
	src: './fonts/Slussen-Regular.otf',
	variable: '--font-slussen-regular',
	weight: '900',
})




const slussenSemibold = localFont({
	src: './fonts/Slussen-Semibold.otf',
	variable: '--font-slussen-semibold',
	weight: '900',
})




const slussenBold = localFont({
	src: './fonts/Slussen-Bold.otf',
	variable: '--font-slussen-bold',
	weight: '900',
})




export const metadata: Metadata = {
	title: 'Manish Sharma | Full Stack Developer',
	description:
		'A full-stack developer with a years of experience turning ideas into user-friendly applications. I focus on writing clean code, building responsive UIs, and ensuring strong server-side performance',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${germanica.variable} ${slussenCompressedBlack.variable} ${slussenExpendedBlack.variable} ${slussenMedium.variable} ${slussenRegular.variable} ${slussenSemibold.variable} ${slussenBold.variable} antialiased`}
			>
				<SpeedInsights />
				<AnimatedParticles>{children}</AnimatedParticles>
			</body>
		</html>
	)
}
