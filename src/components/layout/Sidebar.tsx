// Sidebar.tsx
import React from "react";
import { useModelViewerStore } from "../../store/modelViewerStore";
import { PanelLeft, PersonStanding, Moon, SquarePen, Sparkles, Image as ImageIcon } from "lucide-react";
// import Slider from "../ui/Slider"; // Slider is no longer used
import { HdrPreset } from "../../types";

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const {
    models,
    selectedModelId,
    selectModel,
    isHDREnabled,
    toggleHDR,
    hdrPreset,
    setHdrPreset,
    availableHdrPresets,
  } = useModelViewerStore();

  const handlePresetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHdrPreset(event.target.value as HdrPreset);
  };

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed left-4 top-4 z-50 p-2 bg-slate-800/80 backdrop-blur-md rounded-md text-white"
      >
        <PanelLeft size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-72 lg:w-80 bg-slate-900/70 backdrop-blur-lg shadow-xl transition-transform duration-300 ease-in-out border-r border-white/10 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar header */}
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <h1 className="text-xl font-semibold text-white flex items-center">
              <SquarePen className="mr-2 text-purple-400" size={24} />
              <span>StudyDraw</span>
            </h1>
            <button className="lg:hidden p-1" onClick={toggleSidebar}>
              <PanelLeft className="text-white" size={20} />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <h2 className="text-white/80 text-sm font-medium mb-4 px-2 flex items-center">
              <PersonStanding size={16} className="mr-2 text-amber-400" />
              3D Models
            </h2>
            <div className="space-y-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  className={`w-full flex items-start p-3 rounded-lg transition ${
                    selectedModelId === model.id
                      ? "bg-purple-900/40 ring-1 ring-purple-500/50"
                      : "hover:bg-slate-800/50"
                  }`}
                  onClick={() => selectModel(model.id)}
                >
                  {model.thumbnail && (
                    <div className="mr-3 h-14 w-14 flex-shrink-0">
                      <img
                        src={model.thumbnail}
                        alt={model.name}
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <h3
                      className={`font-medium transition-colors ${
                        selectedModelId === model.id
                          ? "text-white"
                          : "text-white/80"
                      }`}
                    >
                      {model.name}
                    </h3>
                    <p className="text-sm text-white/50 line-clamp-2 mt-1">
                      {model.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Controls Section */}
          <div className="p-4 border-t border-white/10 space-y-6">
            {/* HDR Toggle */}
            <div>
              <label
                htmlFor="hdr-toggle"
                className="flex items-center justify-between text-white/80 text-sm font-medium cursor-pointer"
              >
                <span className="flex items-center">
                  <Sparkles size={16} className="mr-2 text-yellow-400" />
                  Activé/Désactivé HDR
                </span>
                <input
                  type="checkbox"
                  id="hdr-toggle"
                  checked={isHDREnabled}
                  onChange={toggleHDR}
                  className="sr-only" // Hide default checkbox
                />
                <div
                  className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
                    isHDREnabled ? "bg-purple-600" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                      isHDREnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>
            </div>

            {/* HDR Preset Dropdown */}
            {isHDREnabled && (
              <div>
                <label
                  htmlFor="hdr-preset-select"
                  className="flex items-center text-white/80 text-sm font-medium mb-2"
                >
                  <ImageIcon size={16} className="mr-2 text-teal-400" />
                  HDR Preset
                </label>
                <select
                  id="hdr-preset-select"
                  value={hdrPreset}
                  onChange={handlePresetChange}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 text-white/90 rounded-md focus:ring-purple-500 focus:border-purple-500 transition text-sm"
                >
                  {availableHdrPresets.map((preset) => (
                    <option key={preset} value={preset} className="capitalize bg-slate-800 text-white">
                      {preset.charAt(0).toUpperCase() + preset.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* Model Scale Slider removed */}
          </div>


          {/* Sidebar footer */}
          <div className="p-4 border-t border-white/10 text-white/60 text-sm">
            <p className="flex items-center">
              <Moon size={16} className="mr-2 text-blue-400" />
              <span>Artist's Study Mode</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
