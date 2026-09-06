"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Sparkles,
  OrbitControls,
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Group, Mesh } from "three";

function Crystal() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    // gentle mouse-follow parallax
    const { x, y } = state.pointer;
    mesh.current.rotation.y += (x * 0.6 - mesh.current.rotation.y) * 0.05;
    mesh.current.rotation.x += (-y * 0.4 - mesh.current.rotation.x) * 0.05;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.1}>
      <Icosahedron ref={mesh} args={[1.35, 14]}>
        <MeshDistortMaterial
          color="#d4b483"
          emissive="#8a6d34"
          emissiveIntensity={0.15}
          roughness={0.12}
          metalness={0.95}
          distort={0.28}
          speed={1.6}
        />
      </Icosahedron>
      {/* faint gold wireframe shell for a refined facet feel */}
      <Icosahedron args={[1.58, 1]}>
        <meshBasicMaterial color="#ecdcb6" wireframe transparent opacity={0.14} />
      </Icosahedron>
    </Float>
  );
}

function OrbitingDots() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25;
  });
  const dots = Array.from({ length: 6 });
  return (
    <group ref={group}>
      {dots.map((_, i) => {
        const a = (i / dots.length) * Math.PI * 2;
        const r = 2.6;
        return (
          <mesh key={i} position={[Math.cos(a) * r, Math.sin(a * 1.5) * 0.6, Math.sin(a) * r]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 ? "#ecdcb6" : "#d4b483"}
              emissive={i % 2 ? "#ecdcb6" : "#d4b483"}
              emissiveIntensity={1.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 5, 5]} intensity={2.4} color="#fff2d6" />
        <pointLight position={[-5, -3, 2]} intensity={1.6} color="#d4b483" />
        <Crystal />
        <OrbitingDots />
        <Sparkles count={50} scale={9} size={2.2} speed={0.35} color="#ecdcb6" opacity={0.6} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.6}
        />
      </Suspense>
    </Canvas>
  );
}
