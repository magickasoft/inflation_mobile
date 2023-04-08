import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const backButtonArrow = ({color = '#fff', ...rest}) => {
  return (
    <Svg viewBox="0 0 8 14" {...rest}>
      <Path
        d="M2.828 6.99999L7.778 11.95L6.364 13.364L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z"
        fill={color}
      />
    </Svg>
  );
};
