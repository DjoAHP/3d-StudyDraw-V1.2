import { Model, LightSettings } from '../types';

// Default light settings that will be applied to any new model
// model.ts

export const DEFAULT_LIGHT_SETTINGS: LightSettings = {
  directional: {
    intensity: 1.5,  // Réduire l'intensité de la lumière directionnelle
    position: [5, 5, 5],
    color: '#ffffff',
    rotation: 0 // ✅ Ajout ici
  },
  ambient: {
    intensity: 0.2,  // Réduire l'intensité de la lumière ambiante
    color: '#404060',
  },
};


// CDN MODELS
const CDN_BASE = 'https://models-3d-studydraw.netlify.app/models/';

// MODELS IMPORT 
export const INITIAL_MODELS: Model[] = [
  {
    id: 'asaro-head',
    name: 'Asaro Head',
    description: 'Classical Asaro head model for studying facial planes',
    // CDN MODEL 
    path: `${CDN_BASE}asaro-head.glb`,
    thumbnail: 'https://i.imgur.com/nC7Axr0.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.7, -1, 0],
    defaultScale: 70,
  },
  {
    id: 'figure01',
    name: 'Figure low poly',
    description: 'Low poly Bust',
    // CDN MODEL 
    path: `${CDN_BASE}figure01.glb`,
    thumbnail: 'https://i.imgur.com/a7HXzlI.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.7, -1, 0],
    defaultScale: 1.5,
  },
  {
    id: 'loomis-head',
    name: 'Loomis Head',
    description: 'Tete a dessiné',
    // CDN MODEL 
    path: `${CDN_BASE}loomis-head.glb`,
    thumbnail: 'https://i.imgur.com/m3miUsz.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-2.5, 0, 0],
    defaultScale: 2,
  },
  {
    id: 'loomis02',
    name: 'Loomis II',
    description: 'Loomis face',
    // CDN MODEL 
    path: `${CDN_BASE}loomis02.glb`,
    thumbnail: 'https://i.imgur.com/zxAsI1w.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -0.5, 0],
    defaultScale: 0.3,
  },
  {
    id: 'boule01',
    name: 'Boule I',
    description: 'Boule et plan',
    path: `${CDN_BASE}boule-plane.glb`,
    thumbnail: 'https://i.imgur.com/ddMXUS4.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.6, -0.5, 0],
    defaultScale: 3,
  },
  {
    id: 'torus01',
    name: 'Torus I',
    description: 'Torus et plan',
    path: `${CDN_BASE}torus01.glb`,
    thumbnail: 'https://i.imgur.com/7Em19XU.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.6, -0.5, 0],
    defaultScale: 1,
  },
  {
    id: 'oeil01',
    name: 'Oeil I',
    description: 'Oeil a dessiné',
    // CDN MODEL 
    path: `${CDN_BASE}oeil01.glb`,
    thumbnail: 'https://i.imgur.com/9Q7QPve.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [1.5, 0.5, 0],
    defaultScale: 1.3,
  },
  {
    id: 'roeille01',
    name: 'Oreille I',
    description: 'Oreille a dessiné',
    // CDN MODEL 
    path: `${CDN_BASE}oreille01.glb`,
    thumbnail: 'https://i.imgur.com/P2FFuox.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, 0, 0],
    defaultScale: 0.7,
  },
  {
    id: 'bouche01',
    name: 'Bouche I',
    description: 'Bouche a dessiné',
    // CDN MODEL 
    path: `${CDN_BASE}bouche01.glb`,
    thumbnail: 'https://i.imgur.com/4lbAvA1.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.5, 0, 0],
    defaultScale: 1.5,
  },
  {
    id: 'crane-homme',
    name: 'Crane Homme',
    description: 'Crane réaliste d homme',
    // CDN MODEL 
    path: `${CDN_BASE}crane-homme.glb`,
    thumbnail: 'https://i.imgur.com/DQ0TJvm.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.5, -0.5, 0],
    defaultScale: 0.4,
  },
  {
    id: 'pirate01',
    name: 'Crane de pirate',
    description: 'Crane réaliste de pirate',
    // CDN MODEL 
    path: `${CDN_BASE}pirate01.glb`,
    thumbnail: 'https://i.imgur.com/onQRhNf.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1.5, 0],
    defaultScale: 1,
  },
  {
    id: 'napoleon01',
    name: 'Buste de Napoleon',
    description: 'Napoleon bust',
    // CDN MODEL 
    path: `${CDN_BASE}napoleon01.glb`,
    thumbnail: 'https://i.imgur.com/cN4siTu.jpeg',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 8,
  },
  {
    id: 'casque01',
    name: 'Casque audio',
    description: 'Casque audio neutre',
    // CDN MODEL 
    path: `${CDN_BASE}casque01.glb`,
    thumbnail: 'https://i.imgur.com/zCyCk9r.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1.5, -1.5, 0],
    defaultScale: 0.7,
  },
  {
    id: 'manda',
    name: 'Casque de Mandalorian',
    description: 'Casque Manda neutre',
    // CDN MODEL 
    path: `${CDN_BASE}manda.glb`,
    thumbnail: 'https://i.imgur.com/X7Q54O5.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -0.5, 0],
    defaultScale: 0.7,
  },
  {
    id: 'mask01',
    name: 'Samurai',
    description: 'Masque de Samurai',
    // CDN MODEL 
    path: `${CDN_BASE}mask01.glb`,
    thumbnail: 'https://i.imgur.com/qhHevHR.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'cheval01',
    name: 'Cheval low poly',
    description: 'Buste de Cheval',
    // CDN MODEL 
    path: `${CDN_BASE}cheval01.glb`,
    thumbnail: 'https://i.imgur.com/9VUqh2J.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1.3, 0],
    defaultScale: 2,
  },
  {
    id: 'yoda01',
    name: 'Buste de Yoda',
    description: 'Buste de Yoda',
    // CDN MODEL 
    path: `${CDN_BASE}yoda01.glb`,
    thumbnail: 'https://i.imgur.com/wPCqNXA.jpeg',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1.3, 0],
    defaultScale: 1,
  },
  {
    id: 'roshi',
    name: 'Roshi',
    description: 'Roshi statue',
    // CDN MODEL 
    path: `${CDN_BASE}roshi.glb`,
    thumbnail: 'https://i.imgur.com/dHH0QKR.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-0.6, 0.2, 0],
    defaultScale: 1.4,
  },
  {
    id: 'buda02',
    name: 'Buda II',
    description: 'Buda statue',
    // CDN MODEL 
    path: `${CDN_BASE}buda02.glb`,
    thumbnail: 'https://i.imgur.com/y1Xn8E4.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'alien01',
    name: 'Alien I',
    description: 'Alien',
    // CDN MODEL 
    path: `${CDN_BASE}alien01.glb`,
    thumbnail: 'https://i.imgur.com/iX1XDrj.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'augustus',
    name: 'Augustus',
    description: 'Augustus statue',
    // CDN MODEL 
    path: `${CDN_BASE}augustus.glb`,
    thumbnail: 'https://i.imgur.com/kojP5pt.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -2, 0],
    defaultScale: 5,
  },
  {
    id: 'paris01',
    name: 'Paris',
    description: 'Buste de Paris',
    // CDN MODEL 
    path: `${CDN_BASE}paris01.glb`,
    thumbnail: 'https://i.imgur.com/NeJYFqG.jpeg',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1.5,
  },
  {
    id: 'aigle01',
    name: 'Aigle I',
    description: 'Un aigle',
    // CDN MODEL 
    path: `${CDN_BASE}aigle01.glb`,
    thumbnail: 'https://i.imgur.com/MvqMvyU.jpeg',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, 0.5, 0],
    defaultScale: 12,
  },
  {
    id: 'drape01',
    name: 'Drapé I',
    description: 'Drapé',
    // CDN MODEL 
    path: `${CDN_BASE}drape01.glb`,
    thumbnail: 'https://i.imgur.com/rY3M4Sb.jpeg',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -0.7, 0],
    defaultScale: 1,
  },
  {
    id: 'singe01',
    name: 'Singe I',
    description: 'Un singe',
    // CDN MODEL 
    path: `${CDN_BASE}singe01.glb`,
    thumbnail: 'https://i.imgur.com/OqbEA4H.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -0.6, 0],
    defaultScale: 0.7,
  },
  {
    id: 'wolfgang',
    name: 'Wolfgang',
    description: 'Wolfgang bust',
    // CDN MODEL 
    path: `${CDN_BASE}wolfgang.glb`,
    thumbnail: 'https://i.imgur.com/3PttJgE.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, 0, 0],
    defaultScale: 3,
  },
  {
    id: 'anubis01',
    name: 'Anubis I',
    description: 'Anubis bust',
    // CDN MODEL 
    path: `${CDN_BASE}anubis01.glb`,
    thumbnail: 'https://i.imgur.com/9WvbADb.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'pharaon01',
    name: 'Pharaon I',
    description: 'Pharaon bust',
    // CDN MODEL 
    path: `${CDN_BASE}pharaon01.glb`,
    thumbnail: 'https://i.imgur.com/AZihsOX.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'gentle',
    name: 'Gentle',
    description: 'Gentleman bust',
    // CDN MODEL 
    path: `${CDN_BASE}gentle_draco.glb`,
    thumbnail: 'https://i.imgur.com/RITX92M.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1.4, 0],
    defaultScale: 0.5,
  },
  {
    id: 'vase01',
    name: 'Vase I',
    description: 'Un vase I',
    // CDN MODEL 
    path: `${CDN_BASE}vase01.glb`,
    thumbnail: 'https://i.imgur.com/F7PFbir.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'BENK',
    name: 'Benk',
    description: 'Johannes Benk',
    // CDN MODEL 
    path: `${CDN_BASE}benk.glb`,
    thumbnail: 'https://i.imgur.com/KU66TYd.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1, 0],
    defaultScale: 1,
  },
  {
    id: 'centaure',
    name: 'Centaure',
    description: 'Achille & le Centaure',
    // CDN MODEL 
    path: `${CDN_BASE}centaur.glb`,
    thumbnail: 'https://i.imgur.com/g5j4w1B.png',
    defaultRotation: [0, 0, 0],
    defaultPosition: [-1, -1.5, 0],
    defaultScale: 1,
  },
];

// Initial model and light settings
export const INITIAL_MODEL_ID = 'asaro-head';


// Function to create initial light settings for all models
export const createInitialLightSettings = (): Record<string, LightSettings> => {
  const settings: Record<string, LightSettings> = {};

  INITIAL_MODELS.forEach(model => {
    settings[model.id] = { ...DEFAULT_LIGHT_SETTINGS };
  });

  return settings;
};
