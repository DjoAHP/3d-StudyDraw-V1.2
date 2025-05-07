import React, { useState } from "react";
import { useModelViewerStore } from "../../store/modelViewerStore";
import Slider from "../ui/Slider";
import ColorPicker from "../ui/ColorPicker";
import {
  Sun,
  RotateCcw,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Cone,
} from "lucide-react";

interface LightingControlsProps {
  modelId: string;
}

const LightingControls: React.FC<LightingControlsProps> = ({ modelId }) => {
  const {
    selectedModelId,
    lightSettings,
    updateDirectionalLight,
    updateAmbientLight,
    resetLights,
    updateDirectionalRotation,
    updateDirectionalElevation,
  } = useModelViewerStore();

  const currentSettings = lightSettings[modelId];

  // État pour gérer la visibilité du panneau
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const handleDirectionalIntensityChange = (value: number) => {
    updateDirectionalLight(modelId, { intensity: value });
  };

  const handleDirectionalColorChange = (value: string) => {
    updateDirectionalLight(modelId, { color: value });
  };

  const handleAmbientIntensityChange = (value: number) => {
    updateAmbientLight(modelId, { intensity: value });
  };

  const handleAmbientColorChange = (value: string) => {
    updateAmbientLight(modelId, { color: value });
  };

  const handleReset = () => {
    resetLights(modelId);
  };

  // Fonction pour basculer la visibilité du panneau
  const togglePanelVisibility = () => {
    setIsPanelVisible((prev) => !prev);
  };

  // Fonction pour gérer la rotation horizontale de la lumière directionnelle
  const handleDirectionalRotationChange = (value: number) => {
    updateDirectionalRotation(modelId, value);
  };

  if (!currentSettings) return null;

  return (
    <div className="relative">
      {/* Bouton pour masquer/afficher le panneau */}
      <button
        onClick={togglePanelVisibility}
        className="text-white/60 hover:text-white flex items-center text-xs transition-colors mb-4"
      >
        {isPanelVisible ? (
          <ArrowRight size={16} className="mr-2" />
        ) : (
          <ArrowLeft size={16} className="mr-2" />
        )}
        {isPanelVisible ? "Hide Controls" : "Show Controls"}
      </button>

      {/* Panneau des contrôles de lumière */}
      <div
        className={`
          bg-slate-900/70 backdrop-blur-md rounded-lg shadow-lg p-4 border border-white/10
          transition-transform duration-300 ease-in-out
          ${
            isPanelVisible
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-medium flex items-center">
            <Sun size={16} className="mr-2 text-amber-400" />
            Lighting Controls
          </h3>
          <button
            onClick={handleReset}
            className="text-white/60 hover:text-white flex items-center text-xs transition-colors"
          >
            <RotateCcw size={12} className="mr-1" />
            Reset
          </button>
        </div>

        <div className="space-y-6">
          {/* Directional Light Controls */}
          <div className="space-y-3">
            <h4 className="text-white/80 text-sm flex items-center">
              <Cone size={14} className="mr-2 text-amber-300" />
              Directional Light
            </h4>
            <Slider
              label="Intensity"
              value={currentSettings.directional.intensity}
              min={0}
              max={5}
              step={0.1}
              onChange={handleDirectionalIntensityChange}
            />
            <ColorPicker
              label="Color"
              value={currentSettings.directional.color ?? "#ffffff"}
              onChange={handleDirectionalColorChange}
            />
          </div>

          {/* Ambient Light Controls */}
          <div className="space-y-3">
            <h4 className="text-white/80 text-sm flex items-center">
              <Lightbulb size={14} className="mr-2 text-blue-300" />
              Ambient Light
            </h4>
            <Slider
              label="Intensity"
              value={currentSettings.ambient.intensity}
              min={0}
              max={1}
              step={0.05}
              onChange={handleAmbientIntensityChange}
            />
            <ColorPicker
              label="Color"
              value={currentSettings.ambient.color ?? "#ffffff"}
              onChange={handleAmbientColorChange}
            />
          </div>

          {/* Directional Light Rotation et Elevation */}
          <div className="space-y-3">
            <h4 className="text-white/80 text-sm flex items-center">
              <RotateCcw size={14} className="mr-2 text-green-300" />
              Directional Light Rotation
            </h4>
            <Slider
              label="Rotation"
              value={currentSettings.directional.rotation ?? 0}
              min={-180}
              max={180}
              step={1}
              onChange={handleDirectionalRotationChange}
            />
            {selectedModelId && (
              <Slider
                label="Elevation (Y)"
                value={currentSettings.directional.position[1]}
                min={-5}
                max={5}
                step={0.1}
                onChange={(value) =>
                  updateDirectionalElevation(selectedModelId, value)
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightingControls;
