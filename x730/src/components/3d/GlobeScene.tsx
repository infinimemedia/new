"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => new THREE.SphereGeometry(2.2, 48, 48), []);
  const wireframe = useMemo(() => new THREE.EdgesGeometry(
    new THREE.SphereGeometry(2.2, 24, 24)
  ), []);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.08;
    if (linesRef.current) linesRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group>
      {/* Solid core - very subtle */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.4} />
      </mesh>

      {/* Wireframe grid */}
      <lineSegments ref={linesRef} geometry={wireframe}>
        <lineBasicMaterial color="#C4A35A" transparent opacity={0.25} />
      </lineSegments>

      {/* Equator ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.22, 0.003, 8, 100]} />
        <meshBasicMaterial color="#C4A35A" transparent opacity={0.6} />
      </mesh>

      {/* Glow atmosphere */}
      <mesh geometry={geometry} scale={1.06}>
        <meshBasicMaterial
          color="#C4A35A"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function Particles({ count = 200 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);
      const r = 2.8 + Math.random() * 1.5;
      arr[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(theta);
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.015} transparent opacity={0.5} />
    </points>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Globe />
      <Particles />
    </Canvas>
  );
}
