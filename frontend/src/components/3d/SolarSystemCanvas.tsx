import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  RotateCcw,
  Eye,
  EyeOff,
  ArrowRight,
  Info,
  Maximize2,
  Sliders,
} from 'lucide-react';
import { Planet } from '../../types';
import { Fallback2DView } from './Fallback2DView';

interface SolarSystemCanvasProps {
  planets: Planet[];
  selectedPlanetSlug?: string;
  onSelectPlanet?: (slug: string) => void;
}

// Visual parameters for 3D planets
interface Planet3DConfig {
  slug: string;
  name: string;
  radius: number;
  distance: number;
  color: string;
  emissive?: string;
  orbitSpeed: number;
  rotationSpeed: number;
  tiltDeg: number;
  hasRing?: boolean;
}

const PLANET_3D_CONFIGS: Planet3DConfig[] = [
  { slug: 'mercury', name: 'Mercury', radius: 0.6, distance: 10, color: '#9ca3af', orbitSpeed: 4.15, rotationSpeed: 0.01, tiltDeg: 0.03 },
  { slug: 'venus', name: 'Venus', radius: 1.1, distance: 15, color: '#eab308', orbitSpeed: 1.62, rotationSpeed: -0.005, tiltDeg: 177.3 },
  { slug: 'earth', name: 'Earth', radius: 1.2, distance: 21, color: '#38bdf8', orbitSpeed: 1.0, rotationSpeed: 0.02, tiltDeg: 23.44 },
  { slug: 'mars', name: 'Mars', radius: 0.8, distance: 28, color: '#ef4444', orbitSpeed: 0.53, rotationSpeed: 0.02, tiltDeg: 25.19 },
  { slug: 'jupiter', name: 'Jupiter', radius: 3.2, distance: 40, color: '#d97706', orbitSpeed: 0.084, rotationSpeed: 0.04, tiltDeg: 3.13 },
  { slug: 'saturn', name: 'Saturn', radius: 2.7, distance: 54, color: '#fcd34d', orbitSpeed: 0.034, rotationSpeed: 0.038, tiltDeg: 26.73, hasRing: true },
  { slug: 'uranus', name: 'Uranus', radius: 1.8, distance: 68, color: '#22d3ee', orbitSpeed: 0.012, rotationSpeed: -0.025, tiltDeg: 97.77 },
  { slug: 'neptune', name: 'Neptune', radius: 1.7, distance: 80, color: '#3b82f6', orbitSpeed: 0.006, rotationSpeed: 0.028, tiltDeg: 28.32 },
];

// Single Planet in 3D Orbit
const Planet3D: React.FC<{
  config: Planet3DConfig;
  planetData?: Planet;
  speed: number;
  isPlaying: boolean;
  showOrbits: boolean;
  showLabels: boolean;
  isSelected: boolean;
  onSelect: (slug: string) => void;
}> = ({
  config,
  planetData,
  speed,
  isPlaying,
  showOrbits,
  showLabels,
  isSelected,
  onSelect,
}) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);

  // Orbit and axial rotation
  useFrame((_, delta) => {
    if (isPlaying && orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y += delta * config.orbitSpeed * 0.1 * speed;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * config.rotationSpeed * speed;
    }
  });

  // Calculate points for orbit circle
  const orbitPoints = React.useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * config.distance, 0, Math.sin(theta) * config.distance));
    }
    return points;
  }, [config.distance]);

  const lineGeometry = React.useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(orbitPoints);
  }, [orbitPoints]);

  return (
    <>
      {/* Orbital Path Line */}
      {showOrbits && (
        <primitive
          object={
            new THREE.Line(
              lineGeometry,
              new THREE.LineBasicMaterial({
                color: isSelected ? 0x38bdf8 : 0x334155,
                transparent: true,
                opacity: isSelected ? 0.8 : 0.35,
              })
            )
          }
        />
      )}

      {/* Orbit Rotating Pivot Group */}
      <group ref={orbitGroupRef}>
        {/* Planet position along X axis */}
        <group position={[config.distance, 0, 0]}>
          {/* Planet Sphere */}
          <mesh
            ref={planetRef}
            rotation={[THREE.MathUtils.degToRad(config.tiltDeg), 0, 0]}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(config.slug);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'auto';
            }}
          >
            <sphereGeometry args={[config.radius, 32, 32]} />
            <meshStandardMaterial
              color={config.color}
              roughness={0.7}
              metalness={0.1}
              emissive={isSelected ? config.color : '#000000'}
              emissiveIntensity={isSelected ? 0.3 : 0}
            />

            {/* Saturn Ring System */}
            {config.hasRing && (
              <mesh rotation={[Math.PI / 2.3, 0, 0]}>
                <ringGeometry args={[config.radius * 1.4, config.radius * 2.5, 64]} />
                <meshStandardMaterial
                  color="#fbbf24"
                  side={THREE.DoubleSide}
                  transparent
                  opacity={0.8}
                  roughness={0.6}
                />
              </mesh>
            )}

            {/* Selection Aura */}
            {isSelected && (
              <mesh>
                <sphereGeometry args={[config.radius * 1.25, 16, 16]} />
                <meshBasicMaterial
                  color="#38bdf8"
                  wireframe
                  transparent
                  opacity={0.6}
                />
              </mesh>
            )}
          </mesh>

          {/* HTML Label */}
          {showLabels && (
            <Html distanceFactor={45} position={[0, config.radius + 0.9, 0]} center>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(config.slug);
                }}
                className={`cursor-pointer px-2 py-0.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-all select-none ${
                  isSelected
                    ? 'bg-cosmic-cyan text-space-950 font-bold shadow-[0_0_12px_#22d3ee]'
                    : 'bg-space-950/80 backdrop-blur-sm text-slate-300 border border-slate-700/60 hover:text-white hover:border-cosmic-cyan'
                }`}
              >
                {planetData?.name || config.name}
              </div>
            </Html>
          )}
        </group>
      </group>
    </>
  );
};

// Sun with Glow
const Sun3D: React.FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Point Light Emitting from Sun */}
      <pointLight color="#fffbeb" intensity={3.5} distance={300} decay={1.2} />

      {/* Sun Core Mesh */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>

      {/* Corona Glow Mesh */}
      <mesh>
        <sphereGeometry args={[5.2, 32, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.25} />
      </mesh>

      {/* Outer Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[6.2, 32, 32]} />
        <meshBasicMaterial color="#fde047" transparent opacity={0.1} />
      </mesh>

      <Html distanceFactor={50} position={[0, 5.8, 0]} center>
        <div className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cosmic-gold text-space-950 shadow-[0_0_15px_#fbbf24] select-none pointer-events-none">
          THE SUN
        </div>
      </Html>
    </group>
  );
};

export const SolarSystemCanvas: React.FC<SolarSystemCanvasProps> = ({
  planets,
  selectedPlanetSlug,
  onSelectPlanet,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [scaleMode, setScaleMode] = useState<'visual' | 'scientific'>('visual');
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(() => {
    if (selectedPlanetSlug) {
      return planets.find((p) => p.slug === selectedPlanetSlug) || null;
    }
    return null;
  });
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const controlsRef = useRef<any>(null);

  const handleSelectPlanet = (slug: string) => {
    const found = planets.find((p) => p.slug === slug);
    if (found) {
      setSelectedPlanet(found);
      onSelectPlanet?.(slug);
    }
  };

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  if (viewMode === '2d' || hasWebGlError) {
    return (
      <div className="relative">
        <div className="absolute top-4 right-4 z-30">
          <button
            type="button"
            onClick={() => {
              setHasWebGlError(false);
              setViewMode('3d');
            }}
            className="px-3 py-1.5 rounded-xl bg-cosmic-blue/20 hover:bg-cosmic-blue/30 text-cosmic-cyan border border-cosmic-blue/40 text-xs font-mono transition-colors"
          >
            Switch to 3D WebGL
          </button>
        </div>
        <Fallback2DView
          planets={planets}
          selectedPlanetSlug={selectedPlanet?.slug}
          onSelectPlanet={handleSelectPlanet}
          scaleMode={scaleMode}
          onToggleScaleMode={() => setScaleMode(scaleMode === 'visual' ? 'scientific' : 'visual')}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[620px] lg:h-[750px] bg-space-950 rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl shadow-black/80">
      {/* Top Floating Action Bar */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 bg-space-950/85 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl">
        {/* Play/Pause */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors"
          title={isPlaying ? 'Pause orbital motion' : 'Resume orbital motion'}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-cosmic-cyan" /> : <Play className="w-4 h-4 text-emerald-400" />}
        </button>

        {/* Orbits Toggle */}
        <button
          type="button"
          onClick={() => setShowOrbits(!showOrbits)}
          className={`p-2 rounded-xl text-xs transition-colors ${
            showOrbits ? 'bg-cosmic-blue/20 text-cosmic-cyan' : 'bg-slate-900 text-slate-500'
          }`}
          title="Toggle orbit visibility"
        >
          {showOrbits ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>

        {/* Labels Toggle */}
        <button
          type="button"
          onClick={() => setShowLabels(!showLabels)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
            showLabels ? 'bg-cosmic-blue/20 text-cosmic-cyan' : 'bg-slate-900 text-slate-500'
          }`}
        >
          Labels
        </button>

        {/* Reset Camera */}
        <button
          type="button"
          onClick={handleResetCamera}
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Reset Camera Orientation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Scale Mode Toggle */}
        <button
          type="button"
          onClick={() => setScaleMode(scaleMode === 'visual' ? 'scientific' : 'visual')}
          className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-cosmic-gold border border-slate-700/60 transition-colors"
        >
          {scaleMode === 'visual' ? 'Visual Explorer' : 'Scientific Scale'}
        </button>
      </div>

      {/* Top Right Mode Toggle */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setViewMode('2d')}
          className="px-3 py-1.5 rounded-xl bg-space-950/85 backdrop-blur-md hover:bg-slate-800 border border-slate-700/70 text-xs font-mono text-slate-300 transition-colors"
          title="Switch to lightweight 2D Canvas"
        >
          2D Mode
        </button>
      </div>

      {/* Bottom Speed Slider */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-space-950/85 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-800 text-xs font-mono text-slate-400">
        <span>Speed:</span>
        <input
          type="range"
          min="0.2"
          max="3"
          step="0.2"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-20 accent-cosmic-cyan cursor-pointer"
        />
        <span>{speed.toFixed(1)}x</span>
      </div>

      {/* Three.js R3F Canvas */}
      <Canvas
        camera={{ position: [0, 45, 95], fov: 45 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
        onError={() => setHasWebGlError(true)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.25} />
          <Stars radius={200} depth={60} count={3500} factor={4} saturation={0.5} fade speed={1} />

          {/* Sun */}
          <Sun3D />

          {/* Eight Planets */}
          {PLANET_3D_CONFIGS.map((cfg) => {
            const data = planets.find((p) => p.slug === cfg.slug);
            const isSelected = selectedPlanet?.slug === cfg.slug;
            return (
              <Planet3D
                key={cfg.slug}
                config={cfg}
                planetData={data}
                speed={speed}
                isPlaying={isPlaying}
                showOrbits={showOrbits}
                showLabels={showLabels}
                isSelected={isSelected}
                onSelect={handleSelectPlanet}
              />
            );
          })}

          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={15}
            maxDistance={220}
            maxPolarAngle={Math.PI / 2 + 0.1}
          />
        </Suspense>
      </Canvas>

      {/* Floating Selected Planet Inspection HUD Card */}
      {selectedPlanet && (
        <div className="absolute bottom-6 right-6 z-30 w-80 sm:w-88 bg-space-900/95 backdrop-blur-xl border border-cosmic-blue/40 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cosmic-cyan">
                {selectedPlanet.category} Planet • #{selectedPlanet.orderFromSun} from Sun
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                {selectedPlanet.name}
              </h3>
            </div>
            <div
              className="w-4 h-4 rounded-full mt-1"
              style={{ backgroundColor: selectedPlanet.colorHex || '#38bdf8' }}
            />
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
            {selectedPlanet.tagline}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-space-950/70 p-2.5 rounded-xl border border-slate-800 mb-4">
            <div>
              <span className="text-slate-500 block text-[10px]">Diameter</span>
              <span className="text-slate-200">
                {selectedPlanet.meanDiameterKm.toLocaleString()} km
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Distance</span>
              <span className="text-slate-200">{selectedPlanet.meanDistanceAu} AU</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Orbital Period</span>
              <span className="text-slate-200">{selectedPlanet.orbitalPeriodDays} d</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Moons</span>
              <span className="text-slate-200">{selectedPlanet.moonCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/planets/${selectedPlanet.slug}`}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-space-950 font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-lg shadow-cosmic-blue/20 hover:brightness-110 transition-all"
            >
              <span>Explore Detailed Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setSelectedPlanet(null)}
              className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Scientific Scale Disclosure Banner */}
      <div className="absolute bottom-4 right-1/2 translate-x-1/2 hidden md:flex items-center gap-2 bg-space-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[10px] text-slate-400 font-mono pointer-events-none">
        <Info className="w-3 h-3 text-cosmic-gold" />
        <span>Rotate: Click+Drag • Zoom: Scroll • Pan: Right-Click+Drag</span>
      </div>
    </div>
  );
};
