import React from 'react';

function NutritionIndicator({ name, quality }: {
  name: any,
  quality: any
}) {
  const getColor = (quality: any) => {
    switch (quality) {
      case 'Kurang':
        return 'bg-red-500';
      case 'Baik':
        return 'bg-green-500';
      case 'Berlebih':
        return 'bg-yellow-700';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <span className="text-lg font-medium mr-4">{name}</span>
      <div className="flex items-center w-full">
      <div className="flex-1 bg-red-500 text-white py-2 rounded-l-md flex items-center justify-center">
          Kurang
          {quality === 'Kurang' && (
            <div className="absolute -top-3">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-500"></div>
            </div>
          )}
        </div>
        <div className="flex-1 bg-green-500 text-white py-2 relative flex items-center justify-center">
          Baik  {quality === 'Baik' && (
            <div className="absolute -top-3">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-500"></div>
            </div>
          )}
        </div>
        <div className="flex-1 bg-yellow-700 text-white py-2 rounded-r-md flex items-center justify-center">
          Berlebih
          {quality === 'Berlebihan' && (
            <div className="absolute -top-3">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NutritionIndicator;
