import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Rotating wireframe icosahedron ───────────────────────────────────────── */
function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.28;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial
        color="#00ff88"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

/* ─── Outer ring ────────────────────────────────────────────────────────────── */
function OuterRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += delta * 0.15;
    ringRef.current.rotation.x += delta * 0.05;
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[2.4, 0.012, 6, 80]} />
      <meshBasicMaterial color="#00cfff" transparent opacity={0.5} />
    </mesh>
  );
}

/* ─── Orbiting nodes ────────────────────────────────────────────────────────── */
function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 8;

  const positions = useMemo(() =>
    Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.4;
      return [Math.cos(angle) * r, Math.sin(angle) * r * 0.3, Math.sin(angle) * r] as [number,number,number];
    }),
  []);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#00ff88' : '#00cfff'}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Particle field ────────────────────────────────────────────────────────── */
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00ff88"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Scene ─────────────────────────────────────────────────────────────────── */
export default function Terminal3D() {
  return (
    <div className="w-full h-full" style={{ minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} color="#00ff88" intensity={1.2} />
        <pointLight position={[-4, -2, -4]} color="#00cfff" intensity={0.8} />

        <CoreSphere />
        <OuterRing />
        <OrbitingNodes />
        <Particles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
