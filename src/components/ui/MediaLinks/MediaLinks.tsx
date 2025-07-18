'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
	motion,
	useTransform,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from 'framer-motion'
import Link from 'next/link'

export const MediaLinks = ({
	items,
}: {
	items: {
		id: number
		name: string
		image: string
		navigate: string
	}[]
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const springConfig = { stiffness: 100, damping: 5 }
	const x = useMotionValue(0)
	const rotate = useSpring(
		useTransform(x, [-100, 100], [-45, 45]),
		springConfig
	)
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-50, 50]),
		springConfig
	)
	const handleMouseMove = (event: any) => {
		const halfWidth = event.target.offsetWidth / 2
		x.set(event.nativeEvent.offsetX - halfWidth)
	}

	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<>
			{items.map(item => (
				<div
					className='-mr-4  relative'
					key={item.name}
					onMouseEnter={() => setHoveredIndex(item.id)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{isMounted && (
						<AnimatePresence mode='popLayout'>
							{hoveredIndex === item.id && (
								<motion.div
									initial={{ opacity: 0, y: 20, scale: 0.6 }}
									animate={{
										opacity: 1,
										y: 0,
										scale: 1,
										transition: {
											type: 'spring',
											stiffness: 260,
											damping: 10,
										},
									}}
									exit={{ opacity: 0, y: 20, scale: 0.6 }}
									style={{
										translateX: translateX,
										rotate: rotate,
										whiteSpace: 'nowrap',
									}}
									className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-blue z-50 shadow-xl px-4 py-2'
								>
									<div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px  border-black ' />
									<div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-blue to-transparent h-px ' />
									<div className='font-bold text-black relative z-30 text-base'>
										{item.name}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					)}
					<Link href={item.navigate} target='_blank'>
						<Image
							onMouseMove={handleMouseMove}
							height={100}
							width={100}
							src={item.image}
							alt={item.name}
							className='object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-black  relative transition duration-500 bg-blue'
						/>
					</Link>
				</div>
			))}
		</>
	)
}
