"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group, Mesh } from "three";

/**
 * Ambient geometry — thin panels + soft drift.
 * Suggests screens/systems without cartoon props.
 */
function AmbientField() {
  const root = useRef<Group>(null);
  const a = useRef<Mesh>(null);
  const b = useRef<Mesh>(null);
  const c = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      root.current.rotation.y = t * 0.04;
      root.current.rotation.x = Math.sin(t * 0.15) * 0.04;
    }
    if (a.current) a.current.position.y = Math.sin(t * 0.4) * 0.06;
    if (b.current) b.current.position.y = -0.4 + Math.cos(t * 0.35) * 0.05;
    if (c.current) c.current.rotation.z = t * 0.08;
  });

  return (
    <group ref={root} position={[1.6, 0.15, 0]}>
      {/* Main glass panel */}
      <mesh ref={a} position={[0.2, 0.2, 0]} rotation={[0.18, -0.45, 0.08]}>
        <planeGeometry args={[2.4, 1.55]} />
        <meshStandardMaterial
          color="#1a2030"
          metalness={0.6}
          roughness={0.35}
          transparent
          opacity={0.28}
          emissive="#a8bd72"
          emissiveIntensity={0.06}
        />
      </mesh>
      {/* Thin frame edge */}
      <mesh position={[0.2, 0.2, 0.01]} rotation={[0.18, -0.45, 0.08]}>
        <ringGeometry args={[0.92, 0.935, 4]} />
        <meshBasicMaterial color="#a8bd72" transparent opacity={0.22} />
      </mesh>

      {/* Secondary panel */}
      <mesh
        ref={b}
        position={[-1.15, -0.35, 0.35]}
        rotation={[0.25, 0.55, -0.1]}
      >
        <planeGeometry args={[1.1, 1.6]} />
        <meshStandardMaterial
          color="#151a28"
          metalness={0.5}
          roughness={0.4}
          transparent
          opacity={0.22}
          emissive="#5fb8a8"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Soft accent disc — depth, not prop */}
      <mesh ref={c} position={[1.1, -0.7, -0.4]} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[0.55, 0.008, 12, 64]} />
        <meshBasicMaterial color="#a8bd72" transparent opacity={0.35} />
      </mesh>

      <mesh position={[-0.4, 0.95, 0.5]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#e07a55" transparent opacity={0.55} />
      </mesh>
      <mesh position={[1.55, 0.55, 0.3]}>
        <sphereGeometry args={[0.028, 16, 16]} />
        <meshBasicMaterial color="#5fb8a8" transparent opacity={0.5} />
      </mesh>

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 4]} intensity={0.9} color="#e8ecf8" />
      <pointLight position={[2, 1, 2]} intensity={0.6} color="#a8bd72" />
    </group>
  );
}

export function HeroScene() {
  const [mode, setMode] = useState<"boot" | "3d" | "fallback">("boot");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode(reduced ? "fallback" : "3d");
  }, []);

  if (mode !== "3d") {
    return (
      <div className="absolute inset-0 mesh-field opacity-90" aria-hidden="true" />
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 mesh-field opacity-80" />
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.15, 5.2], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0 }}
      >
        <AmbientField />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, color-mix(in oklab, var(--bg) 92%, transparent) 0%, color-mix(in oklab, var(--bg) 40%, transparent) 50%, color-mix(in oklab, var(--bg) 55%, transparent) 100%), linear-gradient(to top, var(--bg) 0%, transparent 36%)",
        }}
      />
    </div>
  );
}
