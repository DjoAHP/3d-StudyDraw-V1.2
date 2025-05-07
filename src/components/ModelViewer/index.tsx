import React from 'react';
import ModelScene from './ModelScene';
import LightingControls from './LightingControls';
import { useModelViewerStore } from '../../store/modelViewerStore';
import { Info, Camera, ZoomIn, Rotate3d } from 'lucide-react';

const ModelViewer: React.FC = () => {
  const { selectedModelId, models } = useModelViewerStore();
  
  const selectedModel = selectedModelId 
    ? models.find(model => model.id === selectedModelId) 
    : null;
  
  if (!selectedModel) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white/60">Please select a model from the sidebar</p>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header with model info */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium text-white">{selectedModel.name}</h2>
          <p className="text-white/60 text-sm">{selectedModel.description}</p>
        </div>
        <div className="flex space-x-1">
          <Info className="text-white/40" size={20} />
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 relative overflow-hidden">
        <ModelScene />
        
        {/* Instructions overlay */}
        <div className="absolute bottom-4 left-4 flex gap-x-4">
          <div className="bg-slate-900/70 backdrop-blur-sm text-white/80 rounded-lg px-3 py-2 text-xs flex items-center">
            <Rotate3d size={14} className="mr-2" />
            <span>Rotation click</span>
          </div>
          <div className="bg-slate-900/70 backdrop-blur-sm text-white/80 rounded-lg px-3 py-2 text-xs flex items-center">
            <ZoomIn size={14} className="mr-2" />
            <span>Scroll pour zoom</span>
          </div>
          <div className="bg-slate-900/70 backdrop-blur-sm text-white/80 rounded-lg px-3 py-2 text-xs flex items-center">
            <Camera size={14} className="mr-2" />
            <span>Shift+Drag pour pivoter</span>
          </div>
        </div>
        
        {/* Lighting controls */}
        <div className="absolute top-4 right-4 w-72">
          <LightingControls modelId={selectedModel.id} />
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
