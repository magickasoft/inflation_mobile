import React from 'react';
import SVG, {Circle} from 'react-native-svg';

export const finish = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 18 18" {...rest}>
      <Circle opacity="0.2" cx="9" cy="9" r="9" fill={color} />
      <Circle
        cx="9.00003"
        cy="9"
        r="4.25"
        fill={color}
        stroke="white"
        stroke-width="2"
      />
    </SVG>
  );
};
