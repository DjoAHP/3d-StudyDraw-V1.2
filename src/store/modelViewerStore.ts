// store/modelViewerStore.ts
import { create } from 'zustand';
import { ModelViewerState, LightSettings, HdrPreset, HDR_PRESETS } from '../types';
import { INITIAL_MODELS, INITIAL_MODEL_ID, DEFAULT_LIGHT_SETTINGS, createInitialLightSettings } from '../data/models';

export const useModelViewerStore = create<ModelViewerState>((set) => ({
  showGrid: true,
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),

  models: INITIAL_MODELS,
  selectedModelId: INITIAL_MODEL_ID,
  lightSettings: createInitialLightSettings(),
  defaultLightSettings: DEFAULT_LIGHT_SETTINGS,
  isHDREnabled: true,
  hdrPreset: "night", // Default HDR preset
  availableHdrPresets: HDR_PRESETS,

  selectModel: (id: string) => set({ selectedModelId: id }),

  updateDirectionalLight: (modelId: string, settings: Partial<LightSettings['directional']>) =>
    set((state) => ({
      lightSettings: {
        ...state.lightSettings,
        [modelId]: {
          ...state.lightSettings[modelId],
          directional: {
            ...state.lightSettings[modelId].directional,
            ...settings
          }
        }
      }
    })),

  updateDirectionalRotation: (modelId: string, rotation: number) =>
    set((state) => ({
      lightSettings: {
        ...state.lightSettings,
        [modelId]: {
          ...state.lightSettings[modelId],
          directional: {
            ...state.lightSettings[modelId].directional,
            rotation,
          },
        },
      },
    })),

  updateDirectionalElevation: (modelId: string, elevationY: number) =>
    set((state) => {
      const prev = state.lightSettings[modelId].directional.position;
      return {
        lightSettings: {
          ...state.lightSettings,
          [modelId]: {
            ...state.lightSettings[modelId],
            directional: {
              ...state.lightSettings[modelId].directional,
              position: [prev[0], elevationY, prev[2]],
            },
          },
        },
      };
    }),

  updateAmbientLight: (modelId: string, settings: Partial<LightSettings['ambient']>) =>
    set((state) => ({
      lightSettings: {
        ...state.lightSettings,
        [modelId]: {
          ...state.lightSettings[modelId],
          ambient: {
            ...state.lightSettings[modelId].ambient,
            ...settings
          }
        }
      }
    })),

  resetLights: (modelId: string) =>
    set((state) => ({
      lightSettings: {
        ...state.lightSettings,
        [modelId]: { ...state.defaultLightSettings }
      }
    })),

  toggleHDR: () => set((state) => ({ isHDREnabled: !state.isHDREnabled })),
  setHdrPreset: (preset: HdrPreset) => set({ hdrPreset: preset }),
}));
