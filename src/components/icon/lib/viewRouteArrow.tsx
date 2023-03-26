import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const viewRouteArrow = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 14 8" {...rest}>
      <Path
        d="M7.00023 5.172L11.9502 0.222002L13.3642 1.636L7.00023 8L0.63623 1.636L2.05023 0.222002L7.00023 5.172Z"
        fill={color}
      />
    </SVG>
  );
};
