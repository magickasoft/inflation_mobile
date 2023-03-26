import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const checkboxArrow = ({color = '#24B0FF', ...rest}) => {
  return (
    <Svg viewBox="0 0 15 11" {...rest}>
      <Path
        d="M5.33312 8.64325L12.9931 0.982422L14.1723 2.16076L5.33312 10.9999L0.0297852 5.69659L1.20812 4.51826L5.33312 8.64325Z"
        fill={color}
      />
    </Svg>
  );
};
