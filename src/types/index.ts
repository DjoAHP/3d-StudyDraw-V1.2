export interface Model {
  id: string;
  name: string;
  description: string;
  path: string;
  thumbnail?: string;
  defaultRotation?: [number, number, number];
  defaultPosition?: [number, number, number];
  defaultScale?: number;
}

export type LightSettings = {
  directional: {
    intensity: number;
    position: [number, number, number];
    color: string;
    rotation: number;
  };
  ambient: {
    intensity: number;
    color: string;
  };
};

export const HDR_PRESETS = [
  "city",
  "sunset",
  "dawn",
  "night",
  "warehouse",
  "forest",
  "apartment",
  "studio",
  "park",
  "lobby",
] as const;

export type HdrPreset = (typeof HDR_PRESETS)[number];

export interface ModelViewerState {
  models: Model[];
  selectedModelId: string | null;
  lightSettings: Record<string, LightSettings>;
  defaultLightSettings: LightSettings;

  isHDREnabled: boolean;
  hdrPreset: HdrPreset; // Selected HDR preset
  availableHdrPresets: readonly HdrPreset[]; // Available HDR presets

  showGrid: boolean;
  toggleGrid: () => void;

  toggleHDR: () => void;
  setHdrPreset: (preset: HdrPreset) => void; // Action to set HDR preset
  
  selectModel: (id: string) => void;
  updateDirectionalLight: (modelId: string, settings: Partial<LightSettings['directional']>) => void;
  updateDirectionalRotation: (modelId: string, rotation: number) => void;
  updateDirectionalElevation: (modelId: string, elevationY: number) => void;
  updateAmbientLight: (modelId: string, settings: Partial<LightSettings['ambient']>) => void;
  resetLights: (modelId: string) => void;
}
