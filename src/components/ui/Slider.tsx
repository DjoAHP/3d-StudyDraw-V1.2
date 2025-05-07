import React from 'react';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  label?: string;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step = 0.01,
  label,
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm text-white/80">{label}</label>
          <span className="text-xs text-white/60">{value.toFixed(2)}</span>
        </div>
      )}
      <div className="relative">
        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Slider;
