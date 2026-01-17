import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Sphere, Trail, Float } from '@react-three/drei'
import * as THREE from 'three'

function NodeConnection({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
    return (
        <Line
            points={[start, end]}
            color="#4B5563"
            lineWidth={1}
            transparent
            opacity={0.3}
        />
    )
}

function DataPacket({ path }: { path: [number, number, number][] }) {
    const ref = useRef<any>(null)
    const speed = 0.5 + Math.random() * 0.5
    const offset = Math.random() * 100

    useFrame((state) => {
        if (ref.current) {
            const t = (state.clock.getElapsedTime() * speed + offset) % 1
            // Simple interpolation along the path (just 2 points for now)
            const [p1, p2] = path
            ref.current.position.x = THREE.MathUtils.lerp(p1[0], p2[0], t)
            ref.current.position.y = THREE.MathUtils.lerp(p1[1], p2[1], t)
            ref.current.position.z = THREE.MathUtils.lerp(p1[2], p2[2], t)
        }
    })

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#A78BFA" opacity={1} transparent />
        </mesh>
    )
}

function WorkflowNetwork() {
    const group = useRef<any>(null)

    // Create a structured "Workflow" layout
    const nodes = useMemo(() => {
        return [
            [-2, 0, 0],   // Input
            [-1, 1.5, 0], // Logic A
            [-1, -1.5, 0],// Logic B
            [1, 1.5, 0],  // Process A
            [1, -1.5, 0], // Process B
            [2, 0, 0]     // Output
        ] as [number, number, number][]
    }, [])

    const connections = useMemo(() => {
        return [
            [0, 1], [0, 2], // Input -> Logic
            [1, 3], [2, 4], // Logic -> Process
            [3, 5], [4, 5], // Process -> Output
            [1, 4], [2, 3]  // Cross communication
        ]
    }, [])

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={group}>
                {/* Render Nodes */}
                {nodes.map((pos, i) => (
                    <mesh key={i} position={pos}>
                        <sphereGeometry args={[0.25, 32, 32]} />
                        <meshStandardMaterial
                            color={i === 0 || i === 5 ? "#60A5FA" : "#8B5CF6"}
                            emissive={i === 0 || i === 5 ? "#3B82F6" : "#7C3AED"}
                            emissiveIntensity={0.8}
                        />
                    </mesh>
                ))}

                {/* Render Lines */}
                {connections.map(([startIdx, endIdx], i) => (
                    <NodeConnection key={i} start={nodes[startIdx]} end={nodes[endIdx]} />
                ))}

                {/* Render Data Packets flowing */}
                {connections.map(([startIdx, endIdx], i) => (
                    <DataPacket key={`packet-${i}`} path={[nodes[startIdx], nodes[endIdx]]} />
                ))}
            </group>
        </Float>
    )
}

export default function AutomationCore() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <WorkflowNetwork />
            </Canvas>
        </div>
    )
}
