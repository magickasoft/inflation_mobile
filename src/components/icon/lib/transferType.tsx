import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

import {color as Color} from '../../../theme';

export const transferType = ({color = Color.Blue, ...props}) => {
  return (
    <Svg viewBox="0 0 12 12" {...props}>
      <G clip-path="url(#clip0_3836_408)">
        <Path
          d="M6.00006 1C3.24006 1 1.00006 3.24 1.00006 6C1.00006 8.76 3.24006 11 6.00006 11C8.76006 11 11.0001 8.76 11.0001 6C11.0001 3.24 8.76006 1 6.00006 1ZM6.00006 10C3.79006 10 2.00006 8.21 2.00006 6C2.00006 3.79 3.79006 2 6.00006 2C8.21006 2 10.0001 3.79 10.0001 6C10.0001 8.21 8.21006 10 6.00006 10Z"
          fill={color}
        />
        <Path
          d="M6.00006 8.5C7.38077 8.5 8.50006 7.38071 8.50006 6C8.50006 4.61929 7.38077 3.5 6.00006 3.5C4.61935 3.5 3.50006 4.61929 3.50006 6C3.50006 7.38071 4.61935 8.5 6.00006 8.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_408">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
