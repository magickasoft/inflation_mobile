import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const check = ({color = '#373737', ...rest}) => {
  return (
    <Svg viewBox="0 0 13 11" {...rest}>
      <Path
        fill={color}
        fillRule="nonzero"
        d="M0 6.81l1.5-1.572L4 7.857 11.5 0 13 1.571 4 11z"
      />
    </Svg>
  );
};
