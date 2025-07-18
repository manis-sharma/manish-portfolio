import { motion } from 'framer-motion'
import styles from './Project.module.scss'

interface Props {
	title: string
	description: string
}

export function Project({ title, description }: Props) {
	return (
		<motion.div className={styles.project}>
			<h3>{title}</h3>
			<p>{description}</p>
		</motion.div>
	)
}
