'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/components/Project/Project'
import styles from './Projects.module.scss'
import { MouseEvent, useRef, useState } from 'react'
import { projects } from './Projects.data'

export default function Projects() {
	const [img, setImg] = useState({
		src: '/',
		alt: 'img',
		opacity: 0,
	})

	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const scrollYProgressSpring = useSpring(scrollYProgress, {
		damping: 30,
		restDelta: 0.01,
	})

	const spring = {
		stiffness: 150,
		damping: 15,
		mass: 0.1,
	}
	const imagePos = {
		x: useSpring(0, spring),
		y: useSpring(0, spring),
	}

	const x = useTransform(scrollYProgressSpring, [0, 1], ['130vw', '-120vw'])

	const handleMove = (e: MouseEvent<HTMLElement>) => {
		const { clientX, clientY } = e
		imagePos.x.set(clientX)
		imagePos.y.set(clientY)
	}

	return (
		<section ref={targetRef} className={styles.projects}>
			<div className={styles.title}>
				<h1>Projects</h1>
			</div>
			<div className={styles.container}>
				<div className={styles.sticky_section}>
					<motion.div
						onMouseMove={handleMove}
						style={{ x }}
						className={styles.project_container}
					>
						{projects.map(({ id, title, description, img }) => {
							return (
								<div
									key={id}
									onMouseEnter={() => {
										setImg({
											src: img,
											alt: title,
											opacity: 1,
										})
									}}
									onMouseLeave={() => {
										setImg({
											src: img,
											alt: title,
											opacity: 0,
										})
									}}
								>
									<Project title={title} description={description} />
								</div>
							)
						})}
					</motion.div>

					<motion.img
						src={img.src}
						alt={img.alt}
						className={styles.hovered_img}
						style={{
							y: imagePos.y,
							x: imagePos.x,
							opacity: img.opacity,
						}}
					/>
				</div>
			</div>
		</section>
	)
}
