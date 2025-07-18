'use client'

import { ReactNode } from 'react'
import styles from './AnimatedParticles.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props {
	children: ReactNode
}

export default function AnimatedParticles({ children }: Props) {
	const { scrollYProgress } = useScroll()

	const translateYStar1 = useTransform(scrollYProgress, [0, 1], [0, -200])
	const translateYStar2 = useTransform(scrollYProgress, [0, 1], [0, -400])
	const translateYStar3 = useTransform(scrollYProgress, [0, 1], [0, -600])

	return (
		<>
			<div className={styles.particlesBg}>
				<motion.div
					className={styles.stars}
					initial={{ y: 0 }}
					animate={{ y: -2000 }}
					transition={{
						duration: 600,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						translateY: translateYStar1,
					}}
				/>
				<motion.div
					className={styles.stars_2}
					initial={{ y: 0 }}
					animate={{ y: -2000 }}
					transition={{
						duration: 400,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						translateY: translateYStar2,
					}}
				/>
				<motion.div
					className={styles.stars_3}
					initial={{ y: 0 }}
					animate={{ y: -2000 }}
					transition={{
						duration: 300,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						translateY: translateYStar3,
					}}
				/>
			</div>
			{children}
		</>
	)
}
