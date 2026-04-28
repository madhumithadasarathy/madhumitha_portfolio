import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Sparkles, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import LabObject from './LabObject';

export default function Scene({ activeCategory, onSelectCategory }) {
  const { camera } = useThree();
  const controlsRef = useRef();
  
  // Camera target positions for each category
  const targets = {
    default: { pos: [0, 2, 8], lookAt: [0, 0, 0] },
    frontend: { pos: [-4, 1.5, 3], lookAt: [-4, 0, 0] },
    fullstack: { pos: [-2, 1.5, 3], lookAt: [-2, 0, 0] },
    ai: { pos: [0, 1.5, 3], lookAt: [0, 0, 0] },
    genai: { pos: [2, 1.5, 3], lookAt: [2, 0, 0] },
    computervision: { pos: [4, 1.5, 3], lookAt: [4, 0, 0] },
  };

  const currentTarget = activeCategory ? targets[activeCategory] : targets.default;

  useFrame((state) => {
    // Smooth camera movement
    camera.position.lerp(new THREE.Vector3(...currentTarget.pos), 0.05);
    
    if (controlsRef.current) {
        const lookAtTarget = new THREE.Vector3(...currentTarget.lookAt);
        controlsRef.current.target.lerp(lookAtTarget, 0.05);
        controlsRef.current.update();
    }
  });

  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      
      <PerspectiveCamera makeDefault position={[0, 2, 8]} />
      <OrbitControls 
        ref={controlsRef}
        enablePan={false}
        minDistance={2}
        maxDistance={12}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A3FF12" />
      
      {/* Accent Lights */}
      <rectAreaLight
        width={10}
        height={10}
        color="#A3FF12"
        intensity={2}
        position={[0, 0, -5]}
        rotation={[0, Math.PI, 0]}
      />

      {/* Environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={100} scale={10} size={2} speed={0.4} color="#A3FF12" />

      {/* Lab Objects */}
      <LabObject 
        type="laptop" 
        title="Frontend" 
        position={[-4, 0, 0]} 
        onClick={() => onSelectCategory('frontend')}
        active={activeCategory === 'frontend'}
      />
      <LabObject 
        type="server" 
        title="Full Stack" 
        position={[-2, 0, 0]} 
        onClick={() => onSelectCategory('fullstack')}
        active={activeCategory === 'fullstack'}
      />
      <LabObject 
        type="sphere" 
        title="AI / ML" 
        position={[0, 0, 0]} 
        onClick={() => onSelectCategory('ai')}
        active={activeCategory === 'ai'}
      />
      <LabObject 
        type="panel" 
        title="Gen AI" 
        position={[2, 0, 0]} 
        onClick={() => onSelectCategory('genai')}
        active={activeCategory === 'genai'}
      />
      <LabObject 
        type="camera" 
        title="Comp Vision" 
        position={[4, 0, 0]} 
        onClick={() => onSelectCategory('computervision')}
        active={activeCategory === 'computervision'}
      />

      {/* Reflective Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
            color="#050505" 
            metalness={0.9} 
            roughness={0.1} 
            transparent 
            opacity={0.8}
        />
      </mesh>
      
      <ContactShadows 
        position={[0, -1.45, 0]} 
        opacity={0.4} 
        scale={20} 
        blur={2} 
        far={4.5} 
      />
    </>
  );
}
