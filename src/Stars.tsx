import React from 'react';
import Star from './Star.tsx'; 

export interface StarsProps {
  count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  const isValid = Number.isInteger(count) && count >= 1 && count <= 5;
  if (!isValid) return null;

  return (
    <ul className="card-body-stars">
      {Array.from({ length: count }, (_, i) => (
        <li key={i}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
