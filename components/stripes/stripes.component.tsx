import React from 'react';

export interface IStripesProps {
  id: string;
  color?: string;
  rotation?: number;
  size?: number;
  opacity?: number;
}

/** Creates an SVG stripe, you can define the color, size and rotation */
const Stripes: React.FC<IStripesProps> = ({
  id,
  color = 'blue',
  size = 45,
  rotation = 45,
  opacity = 0.2,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className="rounded-lg"
    >
      <defs>
        <pattern
          id={`stripe-${color}-${id}`}
          patternUnits="userSpaceOnUse"
          width={size}
          height={size}
          patternTransform={`rotate(${rotation})`}
        >
          <line
            x1={0}
            y={0}
            x2={0}
            y2={size}
            stroke={color}
            strokeWidth={size}
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#stripe-${color}-${id})`}
        opacity={opacity}
      />
    </svg>
  );
};

export default Stripes;
