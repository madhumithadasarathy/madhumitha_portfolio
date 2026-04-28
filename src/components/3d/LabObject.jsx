import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function LabObject({ position, type, title, onClick, active }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
      
      // Floating effect if not active
      if (!active) {
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'laptop':
        return <boxGeometry args={[1.2, 0.1, 0.8]} />;
      case 'server':
        return <boxGeometry args={[0.8, 1.2, 0.8]} />;
      case 'sphere':
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case 'panel':
        return <boxGeometry args={[1.5, 1, 0.05]} />;
      case 'camera':
        return <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered || active ? 1.2 : 1}
        >
          {getGeometry()}
          <meshStandardMaterial
            color={hovered || active ? "#A3FF12" : "#111111"}
            emissive={hovered || active ? "#A3FF12" : "#000000"}
            emissiveIntensity={hovered || active ? 2 : 0}
            metalness={0.8}
            roughness={0.2}
          />
          
          {/* Decorative elements based on type */}
          {type === 'laptop' && (
             <mesh position={[0, 0.4, -0.4]} rotation={[-Math.PI/4, 0, 0]}>
                <boxGeometry args={[1.2, 0.8, 0.05]} />
                <meshStandardMaterial color={hovered || active ? "#A3FF12" : "#222222"} emissive={hovered || active ? "#A3FF12" : "#000000"} emissiveIntensity={0.5} />
             </mesh>
          )}

          {type === 'server' && (
             <group>
                {[0.2, 0, -0.2].map((y, i) => (
                    <mesh key={i} position={[0.41, y, 0]}>
                        <boxGeometry args={[0.02, 0.05, 0.6]} />
                        <meshStandardMaterial color="#A3FF12" emissive="#A3FF12" emissiveIntensity={2} />
                    </mesh>
                ))}
             </group>
          )}

          {type === 'sphere' && (
             <mesh scale={1.1}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial wireframe color="#A3FF12" transparent opacity={0.3} />
             </mesh>
          )}
        </mesh>
      </Float>

      <Text
        position={[0, -1.2, 0]}
        fontSize={0.2}
        color={hovered || active ? "#A3FF12" : "#ffffff"}
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}
