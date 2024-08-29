import React from 'react';
import NutritionIndicator from '../../component/NutritionIndicator/index';

export default function NutritionIndicatorsList() {
  const data = [
    { name: 'Protein', quality: 'Kurang' },
    { name: 'Karbo', quality: 'Baik' },
    { name: 'Lemak', quality: 'Berlebih' }
  ];

  return (
    <div>
      {data.map((item, index) => (
        <NutritionIndicator key={index} name={item.name} quality={item.quality} />
      ))}
    </div>
  );
}
