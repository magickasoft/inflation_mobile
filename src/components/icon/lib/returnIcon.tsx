import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const returnIcon = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 20 16" {...rest}>
      <Path
        d="M10 11H8C6.3596 10.9994 4.75023 11.4471 3.34588 12.2949C1.94152 13.1427 0.795601 14.3582 0.0320014 15.81C0.010538 15.5405 -0.000137283 15.2703 1.33261e-06 15C1.33261e-06 9.477 4.477 5 10 5V0L20 8L10 16V11Z"
        fill={color}
      />
    </SVG>
  );
};
