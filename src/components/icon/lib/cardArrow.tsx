import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const cardArrow = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <Path
        d="M10.4768 6.16664L6.00683 1.69664L7.18516 0.518311L13.6668 6.99998L7.18516 13.4816L6.00683 12.3033L10.4768 7.83331H0.333496V6.16664H10.4768Z"
        fill={color}
      />
    </Svg>
  );
};
