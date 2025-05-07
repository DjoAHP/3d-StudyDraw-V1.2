import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, EnvironmentProps, ContactShadows } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { OrbitControls } from "@react-three/drei";
import { useModelViewerStore } from "../../store/modelViewerStore";
import ModelLoader from "./ModelLoader";
import { Preload } from "@react-three/drei";

const ModelScene: React.FC = () => {
  const {
    models,
    selectedModelId,
    lightSettings,
    isHDREnabled,
    hdrPreset,
  } = useModelViewerStore();

  const selectedModel = models.find((model) => model.id === selectedModelId);
  const currentLightSettings = selectedModelId
    ? lightSettings[selectedModelId]
    : null;

  if (!selectedModel || !currentLightSettings) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-white/60">No model selected</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        shadows="soft"
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = ACESFilmicToneMapping;
          gl.outputColorSpace = SRGBColorSpace;
          gl.toneMappingExposure = 1.2;
        }}
      >
        {/* Lumières */}
        <ambientLight
          intensity={currentLightSettings.ambient.intensity}
          color={currentLightSettings.ambient.color}
        />
        {(() => {
          const { intensity, color, rotation } =
            currentLightSettings.directional;

          const radius = 10;
          const angleInRad = (rotation ?? 0) * (Math.PI / 180);

          const x = Math.sin(angleInRad) * radius;
          const z = Math.cos(angleInRad) * radius;
          const y = currentLightSettings.directional.position[1];

          return (
            <directionalLight
              intensity={intensity}
              color={color}
              position={[x, y, z]}
              castShadow
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-bias={-0.0001}
            />
          );
        })()}

        {/* Occlusion ambiante */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.8}
          scale={10}
          blur={4}
          far={10}
        />

        {/* Environnement HDR */}
        {isHDREnabled && (
          <Environment
            preset={hdrPreset as EnvironmentProps['preset']}
            backgroundIntensity={0.05}
            resolution={512}
            path="/static/hdri/"
            files={["city.hdr", "sunset.hdr", "dawn.hdr"]}
          />
        )}


        {/* Modèle 3D */}
        <ModelLoader model={selectedModel} scale={1} />
        <OrbitControls
          minDistance={0.5}
          maxDistance={15}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />

        {/* Préchargement */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ModelScene;
