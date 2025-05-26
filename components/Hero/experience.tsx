"use client";
// import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
      <mesh position-y={-2}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
