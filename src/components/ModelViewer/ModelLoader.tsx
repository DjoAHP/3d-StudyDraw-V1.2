import React, { Suspense, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Model } from "../../types";
import * as THREE from "three";

interface ModelLoaderProps extends GroupProps {
  model: Model;
}

const ModelLoader: React.FC<ModelLoaderProps> = ({ model, ...props }) => {
  const { scene } = useGLTF(model.path);

  // Matériau PBR réaliste (Physically Based Rendering)
const pbrMaterial = useMemo(() => {
  return new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    roughness: 0.7,
    metalness: 0.3,
    clearcoat: 0.5, // ✅ Valide ici
    clearcoatRoughness: 0.2, // ✅ Valide ici
  });
}, []);


  // Appliquer le matériau PBR à tous les meshes
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = pbrMaterial;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    return clone;
  }, [scene, pbrMaterial]);

  return (
    <group
      {...props}
      rotation={model.defaultRotation || [0, 0, 0]}
      position={model.defaultPosition || [0, 0, 0]}
      scale={model.defaultScale || 1}
    >
      <primitive object={clonedScene} />
    </group>
  );
};

const ModelFallback = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#444" wireframe />
    </mesh>
  );
};

const SuspendedModelLoader: React.FC<ModelLoaderProps> = (props) => {
  return (
    <Suspense fallback={<ModelFallback />}>
      <ModelLoader {...props} />
    </Suspense>
  );
};

export default SuspendedModelLoader;

// Précharger les modèles
const CDN = "https://models-3d-studydraw.netlify.app/models/";

// Liste des noms de fichiers .glb à précharger
const models = [
  "asaro-head.glb",
  "augustus.glb",
  "bouche01.glb",
  "boule-plane.glb",
  "oeil01.glb",
  "roshi.glb",
  "wolfgang.glb",
  "aigle01.glb",
  "loomis02.glb",
  "loomis-head.glb",
  "crane-homme.glb",
  "casque01.glb",
  "manda.glb",
  "gentle_draco.glb",
  "singe01.glb",
  "torus01.glb",
  "napoleon01.glb",
  "drape01.glb",
  "paris01.glb",
  "yoda0101.glb",
];

// Préchargement des modèles
models.forEach((model) => {
  useGLTF.preload(CDN + model);
});
