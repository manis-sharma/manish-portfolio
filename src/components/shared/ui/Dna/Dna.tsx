'use client'

import React, { useState } from 'react'
import { DnaModel } from '@/components/shared/ui/Dna/DnaModel'
import { Suspense } from 'react'
import CanvasLoader from '@/components/shared/ui/CanvasLoader/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './Dna.module.scss'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
export default function Dna({ light = false }: { light: boolean }) {
	const { scrollYProgress } = useScroll()

	const rotationXTransform = useTransform(scrollYProgress, [0, 1], [-10, 10])

	const scaleTransform = useTransform(scrollYProgress, [0, 1], [0, 4])

	const [rotationX, setRotationX] = useState(-10)
	const [scale, setScale] = useState(3)

	useMotionValueEvent(rotationXTransform, 'change', latest => {
		setRotationX(latest)
	})

	useMotionValueEvent(scaleTransform, 'change', latest => {
		setScale(latest)
	})

	return (
		<div className={light ? styles.dnaLight : styles.dna}>
			<Canvas>
				<Suspense fallback={<CanvasLoader />}>
					<PerspectiveCamera makeDefault position={[0, 0, 30]} />
					<directionalLight
						color={light ? '#98bfff' : "'#98bfff'"}
						position={light ? [1, 5, 10] : [20, 3, 5]}
						intensity={light ? 17000 : 700}
					/>
					<DnaModel
						scale={light ? scale : 4}
						position={light ? [10, -2, 15] : [7, -3.4, 15]}
						rotation={light ? [10, scale, 200] : [rotationX, 2.5, 1.1]}
					/>
				</Suspense>
			</Canvas>
		</div>
	)
}
