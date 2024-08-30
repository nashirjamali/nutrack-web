import React from 'react';

function NutritionIndicator({
  name,
  quality
}: {
  name: string;
  quality: string;
}) {
  return (
    <div className="items-center mb-4">
      <span className="text-lg mr-4">{name}</span>
      <div className="flex items-center w-full mt-2">
        <div className="flex-1 bg-red-500 text-white py-2 rounded-l-md flex items-center justify-center">
          Kurang
          {quality === 'Kurang' && (
            <div className="absolute -top-3">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent"></div>
            </div>
          )}
        </div>
        <div className="flex-1 bg-green-500 text-white py-2 relative flex items-center justify-center">
          Baik
          {quality === 'Baik' && (
            <div className="absolute -top-3">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent"></div>
            </div>
          )}
        </div>
        <div className="flex-1 bg-yellow-700 text-white py-2 rounded-r-md flex items-center justify-center">
          Berlebih
          {quality === 'Berlebihan' && (
            <div className="absolute -top-3">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NutritionIndicator;
