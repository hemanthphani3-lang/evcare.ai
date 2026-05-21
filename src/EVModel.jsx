import { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EVModel() {
  const modelRef = useRef();
  const groupRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".app-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Spin the car to show different angles
    tl.to(modelRef.current.rotation, {
      y: Math.PI * 2.5,
      x: 0.1,
      z: -0.1,
      ease: "none"
    }, 0);

    // Move car horizontally based on the sections
    tl.to(groupRef.current.position, { x: 2, y: 0, duration: 0.2 }, 0);
    tl.to(groupRef.current.position, { x: -2, y: -0.5, duration: 0.2 }, 0.2);
    tl.to(groupRef.current.position, { x: 2, y: 0.5, duration: 0.2 }, 0.4);
    tl.to(groupRef.current.position, { x: -2, y: 0, duration: 0.2 }, 0.6);
    tl.to(groupRef.current.position, { x: 0, y: 0, z: 2, duration: 0.2 }, 0.8);

    return () => tl.kill();
  }, []);

  // Continuous subtle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
    }
  });

  // Materials for our procedural car
  const bodyMaterial = <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />;
  const glassMaterial = <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.8} />;
  const wheelMaterial = <meshStandardMaterial color="#222222" roughness={0.8} />;
  const rimMaterial = <meshStandardMaterial color="#0066cc" roughness={0.2} metalness={0.8} />;

  return (
    <group ref={groupRef}>
      <group ref={modelRef} scale={0.8} rotation={[0, -Math.PI / 4, 0]}>
        
        {/* Car Body (Bottom half) */}
        <Box args={[4, 0.8, 1.8]} position={[0, 0.4, 0]} castShadow>
          {bodyMaterial}
        </Box>
        
        {/* Car Cabin (Top half / Glass) */}
        <Box args={[2.2, 0.7, 1.6]} position={[-0.2, 1.15, 0]} castShadow>
          {glassMaterial}
        </Box>
        
        {/* Headlights */}
        <Box args={[0.1, 0.2, 0.4]} position={[2.01, 0.5, 0.6]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
        </Box>
        <Box args={[0.1, 0.2, 0.4]} position={[2.01, 0.5, -0.6]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
        </Box>
        
        {/* Tail lights */}
        <Box args={[0.1, 0.2, 0.4]} position={[-2.01, 0.5, 0.6]}>
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
        </Box>
        <Box args={[0.1, 0.2, 0.4]} position={[-2.01, 0.5, -0.6]}>
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
        </Box>

        {/* Wheels */}
        {/* Front Left */}
        <group position={[1.2, 0, 0.9]}>
          <Cylinder args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
            {wheelMaterial}
          </Cylinder>
          <Cylinder args={[0.2, 0.2, 0.22, 16]} rotation={[Math.PI / 2, 0, 0]}>
            {rimMaterial}
          </Cylinder>
        </group>

        {/* Front Right */}
        <group position={[1.2, 0, -0.9]}>
          <Cylinder args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
            {wheelMaterial}
          </Cylinder>
          <Cylinder args={[0.2, 0.2, 0.22, 16]} rotation={[Math.PI / 2, 0, 0]}>
            {rimMaterial}
          </Cylinder>
        </group>

        {/* Rear Left */}
        <group position={[-1.2, 0, 0.9]}>
          <Cylinder args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
            {wheelMaterial}
          </Cylinder>
          <Cylinder args={[0.2, 0.2, 0.22, 16]} rotation={[Math.PI / 2, 0, 0]}>
            {rimMaterial}
          </Cylinder>
        </group>

        {/* Rear Right */}
        <group position={[-1.2, 0, -0.9]}>
          <Cylinder args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
            {wheelMaterial}
          </Cylinder>
          <Cylinder args={[0.2, 0.2, 0.22, 16]} rotation={[Math.PI / 2, 0, 0]}>
            {rimMaterial}
          </Cylinder>
        </group>

      </group>
    </group>
  );
}
