import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const organizerArrow = ({color = '#C5CBD8', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 18" {...rest}>
      <Path
        d="M7.56283 8.99998L0.962832 15.6L2.84816 17.4853L11.3335 8.99998L2.84816 0.514648L0.962832 2.39998L7.56283 8.99998Z"
        fill={color}
      />
    </SVG>
  );
};
