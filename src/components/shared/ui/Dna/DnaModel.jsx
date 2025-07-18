'use client'

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function DnaModel(props) {
	const { nodes, materials } = useGLTF('/DnaModel/model.glb')
	return (
		<group {...props} dispose={null}>
			<group
				position={[-0.003, -0.003, 0.005]}
				rotation={[-0.777, -0.443, 1.172]}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_4.geometry}
						material={materials['Material.001']}
						position={[0, -2.5, 0]}
						scale={0.5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_6.geometry}
						material={materials['Material.002']}
						position={[0, -2.5, 0]}
						scale={[0.4, 0.025, 0.05]}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/DnaModel/model.glb')
