import React from 'react';
import SVG, {Circle, Path} from 'react-native-svg';

export const infoIcon = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 18 18" {...rest}>
      <Circle
        cx="9"
        cy="9"
        r="8"
        stroke={color}
        stroke-width="2"
        fill={'#fff'}
      />
      <Path d="M8 13V7H10V13H8Z" fill={color} />
      <Circle cx="9" cy="5" r="1" fill={color} />
    </SVG>
  );
};
