'use client'

import Contacts from '@/components/Contacts/Contacts'
import styles from './Contact.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Contact() {
	const refContainer = useRef<HTMLHeadingElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ['start start', 'end end'],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1, 15])

	return (
		<>
			<section ref={refContainer} className={styles.contact}>
				<motion.span
					style={{
						width: '200px',
						height: '200px',

						borderRadius: '50%',
						scale,
					}}
				/>
			</section>
			<Contacts />
		</>
	)
}
