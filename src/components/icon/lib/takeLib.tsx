import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {color as Color} from '../../../theme';

export const takeLib = ({color = Color.Blue, ...props}) => {
  return (
    <Svg viewBox="0 0 22 18" {...props}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M19.25 0H2.75C1.23 0 0 .955 0 2.133v12.8c0 1.179 1.23 2.134 2.75 2.134h16.5c1.52 0 2.75-.955 2.75-2.134v-12.8C22 .955 20.77 0 19.25 0zM1.75 14.933l3.403-5.17a1 1 0 011.587-.11l3.367 3.838 3.838-4.87a1 1 0 011.585.02l4.72 6.292H1.75z"
      />
    </Svg>
  );
};
