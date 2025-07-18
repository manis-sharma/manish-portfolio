'use client'

import styles from './About.module.scss'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.about_me}>
				<span>About me</span>
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
				/>
			</div>

			<div className={styles.texts}>
				<div className={styles.text}>
					<h3>A Passionate Full-Stack Develope</h3>
					<p>
						Hi! I have a years of experience working on the front-end 
						of web projects. I love turning ideas into real,
						user-friendly applications and enjoy learning new tools to keep my
						solutions fresh and reliable.
					</p>
				</div>
				<div className={styles.text}>
					<h3>Always Striving for Better Solutions</h3>
					<p>
						Over the years, I have focused on writing clean code, creating
						responsive interfaces, and building strong server-side logic. I
						believe that good teamwork is the key to delivering products that
						people really enjoy using.
					</p>
				</div>
				<div className={styles.text}>
					<p>
						I pay attention to small details and make sure my work looks good
						and works smoothly. Whether I’m starting a project from scratch or
						improving an existing one, I stay dedicated to delivering
						high-quality results.
					</p>
				</div>
			</div>
		</section>
	)
}
