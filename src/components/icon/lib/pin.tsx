import React from 'react';
import SVG, {Circle} from 'react-native-svg';

export const pin = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 36 36" {...rest}>
      <Circle opacity="0.2" cx="18" cy="18" r="18" fill={color} />
      <Circle
        cx="18"
        cy="18"
        r="8.5"
        fill="white"
        stroke={color}
        stroke-width="4"
      />
    </SVG>
  );
};
