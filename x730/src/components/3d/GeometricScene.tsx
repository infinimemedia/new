"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ShapeType =
  | "icosahedron"
  | "torus"
  | "octahedron"
  | "radar"
  | "rings"
  | "particles"
  | "crystal"
  | "shield"
  | "target"
  | "circuit";

interface GeometricSceneProps {
  shape: ShapeType;
  color?: string;
  speed?: number;
}

function IcosahedronShape({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((_, d) => {
    if (ref.current) { ref.current.rotation.y += d * 0.12; ref.current.rotation.x += d * 0.05; }
    if (edgesRef.current) { edgesRef.current.rotation.y += d * 0.12; edgesRef.current.rotation.x += d * 0.05; }
  });

  return (
    <group>
      <mesh ref={ref} geometry={geo}>
        <meshBasicMaterial color="#080808" transparent opacity={0.5} />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color={color} transparent opacity={0.7} />
      </lineSegments>
    </group>
  );
}

function TorusShape({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.08;
      ref.current.rotation.z += d * 0.05;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[2, 0.015, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.015, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.015, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
      {/* Inner crystal */}
      <mesh>
        <octahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} wireframe />
      </mesh>
    </group>
  );
}

function OctahedronShape({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => new THREE.OctahedronGeometry(2, 0), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((_, d) => {
    if (ref.current) { ref.current.rotation.y += d * 0.15; ref.current.rotation.x += d * 0.08; }
    if (edgesRef.current) { edgesRef.current.rotation.y += d * 0.15; edgesRef.current.rotation.x += d * 0.08; }
  });

  return (
    <group>
      <mesh ref={ref} geometry={geo}>
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.3} />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color={color} transparent opacity={0.9} />
      </lineSegments>
    </group>
  );
}

function RadarShape({ color }: { color: string }) {
  const sweepRef = useRef<THREE.Mesh>(null);
  const rings: number[] = [0.8, 1.4, 2.0, 2.6];

  useFrame((_, d) => {
    if (sweepRef.current) sweepRef.current.rotation.z -= d * 1.2;
  });

  return (
    <group rotation={[Math.PI / 2.2, 0, 0]}>
      {rings.map((r) => (
        <mesh key={r}>
          <torusGeometry args={[r, 0.008, 8, 80]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
      ))}
      {/* Cross hairs */}
      {[0, Math.PI / 2].map((a) => (
        <mesh key={a} rotation={[0, 0, a]}>
          <boxGeometry args={[5.4, 0.005, 0.005]} />
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
      ))}
      {/* Sweep arm */}
      <mesh ref={sweepRef}>
        <boxGeometry args={[2.7, 0.008, 0.008]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      {/* Sweep glow triangle */}
      <mesh ref={sweepRef}>
        <coneGeometry args={[0.5, 2.7, 32, 1, true]} />
        <meshBasicMaterial color={color} transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function RingsShape({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, d) => {
    if (groupRef.current) groupRef.current.rotation.y += d * 0.1;
  });

  return (
    <group ref={groupRef}>
      {[1.0, 1.6, 2.2, 2.8].map((r, i) => (
        <mesh key={r} rotation={[i * 0.4, i * 0.3, 0]}>
          <torusGeometry args={[r, 0.012, 8, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.4 - i * 0.05} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} wireframe />
      </mesh>
    </group>
  );
}

function ParticlesShape({ color }: { color: string }) {
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.025} transparent opacity={0.7} />
    </points>
  );
}

function CrystalShape({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#080808" transparent opacity={0.5} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.OctahedronGeometry(1.2, 0)]} />
        <lineBasicMaterial color={color} transparent opacity={0.9} />
      </lineSegments>
      <mesh scale={1.5}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color={color} transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

function TargetShape({ color }: { color: string }) {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (outerRef.current) outerRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    if (innerRef.current) innerRef.current.rotation.z = -state.clock.elapsedTime * 0.3;
  });

  return (
    <group>
      <group ref={outerRef}>
        {[2.6, 1.8, 1.1].map((r, i) => (
          <mesh key={r}>
            <torusGeometry args={[r, 0.01, 8, 80]} />
            <meshBasicMaterial color={color} transparent opacity={0.3 + i * 0.1} />
          </mesh>
        ))}
        {[0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].map((a) => (
          <mesh key={a} rotation={[0, 0, a]}>
            <boxGeometry args={[5.4, 0.008, 0.008]} />
            <meshBasicMaterial color={color} transparent opacity={0.15} />
          </mesh>
        ))}
      </group>
      <group ref={innerRef}>
        {[0.5].map((r) => (
          <mesh key={r}>
            <torusGeometry args={[r, 0.02, 8, 60]} />
            <meshBasicMaterial color={color} transparent opacity={0.9} />
          </mesh>
        ))}
      </group>
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function CircuitShape({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  const count = 80;
  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 5;
      const y = (Math.random() - 0.5) * 5;
      const len = 0.2 + Math.random() * 0.6;
      const horiz = Math.random() > 0.5;
      result.push({ x, y, len, horiz });
    }
    return result;
  }, [count]);

  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.05;
  });

  return (
    <group ref={ref}>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, l.y, 0]}>
          <boxGeometry args={l.horiz ? [l.len, 0.01, 0.01] : [0.01, l.len, 0.01]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
      ))}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh key={`node-${i}`} position={[(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, 0]}>
          <boxGeometry args={[0.04, 0.04, 0.04]} />
          <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function ShapeSelector({ shape, color }: { shape: ShapeType; color: string }) {
  switch (shape) {
    case "icosahedron": return <IcosahedronShape color={color} />;
    case "torus": return <TorusShape color={color} />;
    case "octahedron": return <OctahedronShape color={color} />;
    case "radar": return <RadarShape color={color} />;
    case "rings": return <RingsShape color={color} />;
    case "particles": return <ParticlesShape color={color} />;
    case "crystal": return <CrystalShape color={color} />;
    case "shield": return <IcosahedronShape color={color} />;
    case "target": return <TargetShape color={color} />;
    case "circuit": return <CircuitShape color={color} />;
    default: return <OctahedronShape color={color} />;
  }
}

export default function GeometricScene({ shape, color = "#C4A35A", speed = 1 }: GeometricSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <ShapeSelector shape={shape} color={color} />
    </Canvas>
  );
}
