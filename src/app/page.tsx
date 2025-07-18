'use client'

import Hero from '@/layouts/Hero/Hero'
import styles from './main.module.scss'
import Dna from '@/components/shared/ui/Dna/Dna'
import { useEffect } from 'react'
import Lenis from 'lenis'
import About from '@/layouts/About/About'
import { Leva } from 'leva'
import { motion, useScroll, useSpring } from 'framer-motion'
import Projects from '@/layouts/Projects/Projects'
import { Contact } from '@/layouts/Contact/Contact'

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	const { scrollYProgress } = useScroll()

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})

	return (
		<>
			<motion.div className={styles.progress_bar} style={{ scaleX }} />
			<Leva />
			<div className={styles.bg}></div>
			<Dna light={false} />
			<main className={styles.main}>
				<Hero />
				<About />
			</main>
			<Projects />
			<Contact />
		</>
	)
}
