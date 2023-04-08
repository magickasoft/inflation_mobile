import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const minus = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 10 2" {...rest}>
      <Path d="M0 0.285645H10V1.71422H0V0.285645Z" fill={color} />
    </SVG>
  );
};
