import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, ScrollControls, Scroll, useScroll, MeshDistortMaterial, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Logo = () => (
  <img 
    src="https://savoxx.com/media/images/codeltd_logo.png" 
    alt="CODE LTD Logo" 
    className="w-48 md:w-64 drop-shadow-[0_0_35px_rgba(232,82,42,0.3)]"
  />
);

const Scene = () => {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const offset = scroll.offset;
    // Camera movement based on scroll
    state.camera.position.z = 5 + offset * 8;
    state.camera.position.y = -offset * 4;
    state.camera.lookAt(0, 0, 0);

    if (groupRef.current) {
      groupRef.current.rotation.y = offset * Math.PI * 1.5;
    }
    
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.z += 0.003;
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#E8522A" />
      
      <group ref={groupRef}>
        {/* Central Abstract 3D Element */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh ref={cubeRef} position={[0, 0, 0]}>
            <octahedronGeometry args={[2, 0]} />
            <MeshDistortMaterial 
              color="#111" 
              speed={3} 
              distort={0.4} 
              radius={1}
              metalness={1}
              roughness={0}
              emissive="#E8522A"
              emissiveIntensity={0.05}
            />
          </mesh>
        </Float>

        {/* Floating Technical Modules */}
        {[...Array(30)].map((_, i) => (
          <Float key={i} speed={0.5} position={[
            Math.sin(i * 0.7) * 12, 
            Math.cos(i * 0.3) * 12, 
            -i * 1.5
          ]}>
            <mesh>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial color="#E8522A" emissive="#E8522A" emissiveIntensity={4} />
            </mesh>
          </Float>
        ))}
      </group>
    </>
  );
};

export default function App() {
  return (
    <div className="h-screen w-full bg-[#050505] text-white">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.25}>
            <Scene />
            
            <Scroll html>
              <div className="w-screen">
                {/* Hero Section */}
                <section className="h-screen flex flex-col items-center justify-center relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center gap-10 text-center z-10"
                  >
                    <Logo />
                    <div>
                      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
                        SaaS EVOLVED.
                      </h1>
                      <p className="text-[#E8522A] text-sm md:text-base tracking-[0.6em] font-medium uppercase opacity-80">
                        Engineering Next-Gen Digital Ecosystems
                      </p>
                    </div>
                  </motion.div>
                  
                  <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-30">
                    <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                  </div>
                </section>

                {/* Expertise Section */}
                <section className="h-screen flex items-center justify-center px-6">
                  <div className="glass-morphism p-10 md:p-16 rounded-3xl max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                      <div className="text-[#E8522A] font-mono text-xs tracking-widest mb-4">01 // THE ARCHITECTURE</div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">We Build SaaS that <span className="text-gray-400">Actually Scales.</span></h2>
                      <p className="text-gray-400 leading-relaxed text-lg font-light">
                        From multi-tenant cloud architectures to hyper-optimized frontend experiences, 
                        we deliver production-grade software that drives enterprise growth.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      {['Cloud Native Solutions', 'Multi-tenant Systems', 'Real-time Dashboards', 'API First Design'].map((item, idx) => (
                        <motion.div 
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E8522A] group-hover:scale-150 transition-transform shadow-[0_0_10px_#E8522A]"></div>
                          <span className="text-sm tracking-widest uppercase font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Capabilities Section */}
                <section className="h-screen flex items-center justify-center px-6">
                  <div className="max-w-6xl w-full text-center">
                    <div className="text-[#E8522A] font-mono text-xs tracking-widest mb-6 uppercase">02 // CAPABILITIES</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                      {[
                        { title: 'Product Design', desc: 'User-centric interfaces engineered for conversion and retention.' },
                        { title: 'Development', desc: 'High-performance codebases utilizing the latest technology stacks.' },
                        { title: 'Infrastructure', desc: 'Automated CI/CD pipelines and zero-downtime cloud deployments.' }
                      ].map((card, i) => (
                        <div key={i} className="glass-morphism p-8 rounded-2xl border-white/5 hover:border-[#E8522A]/30 transition-colors">
                          <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Footer Section */}
                <section className="h-screen flex flex-col items-center justify-center relative">
                  <div className="text-center z-10">
                    <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
                      CODE LTD
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">Ready to scale?</h2>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:hello@codeltd.com" 
                      className="inline-block bg-[#E8522A] text-white px-12 py-5 text-lg font-bold tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(232,82,42,0.4)] hover:shadow-[0_0_50px_rgba(232,82,42,0.6)] transition-all"
                    >
                      Start Project
                    </motion.a>
                    
                    <div className="mt-24 space-y-4">
                      <p className="text-gray-600 text-xs tracking-[0.4em] uppercase font-light">
                        codeltd.com &mdash; &copy; 2026
                      </p>
                      <div className="flex justify-center gap-8 text-[10px] text-gray-700 tracking-widest uppercase">
                        <span>LinkedIn</span>
                        <span>Twitter</span>
                        <span>GitHub</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      
      {/* Background Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
}
