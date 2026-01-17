import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function NetworkGraph(props: any) {
    const ref = useRef<any>(null)
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), [])

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8B5CF6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    )
}

export default function Scene3D() {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <NetworkGraph />
        </Canvas>
    )
}
