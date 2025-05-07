import React from 'react';

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  label
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm text-white/80 block">{label}</label>
      )}
      <div className="flex items-center space-x-3">
        <div 
          className="w-8 h-8 rounded-full border border-white/20"
          style={{ backgroundColor: value }}
        ></div>
        <input
          type="color"
          value={value}
          onChange={handleChange}
          className="w-full h-8 bg-transparent rounded border border-white/20 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
