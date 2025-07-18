'use client'

import { MediaLinks } from '@/components/ui/MediaLinks/MediaLinks'
import styles from './Hero.module.scss'
import { links } from './links'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
	const [scrollY, setScrollY] = useState(0) // Current scroll position
	const [isVisible, setIsVisible] = useState(true) // Visibility of the element

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			// Determine visibility based on scroll direction
			setIsVisible(currentScrollY < scrollY)
			setScrollY(currentScrollY)
		}

		// Attach the scroll listener
		window.addEventListener('scroll', handleScroll)

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollY])
	return (
		<section className={styles.hero}>
			<div className={styles.top}>
				<h1 className={styles.main_text}>Manish</h1>
				<h3 className={styles.sub_text}>SHARMA</h3>
				<p className={styles.text}>Frontend engineer</p>
			</div>

			<motion.div
				initial={{ opacity: 1, y: 0 }}
				animate={{
					opacity: isVisible ? 1 : 0,
					y: isVisible ? 0 : -50,
				}}
				transition={{ duration: 0.5 }}
				className={styles.bottom}
			>
				<div className={styles.icons}>
					<MediaLinks items={links} />
				</div>
				<div className={styles.explore}>
					<span>Scroll to explore</span>
					<motion.span
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: '100%', opacity: 1 }}
						transition={{
							type: 'spring',
							repeat: Infinity,
							repeatType: 'reverse',
							repeatDelay: 0.5,
						}}
						className={styles.border}
					></motion.span>
				</div>
			</motion.div>
		</section>
	)
}
