import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const basket = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 28 28" {...rest}>
      <Path
        d="M4.667 7.483.883 3.701 2.534 2.05l3.782 3.783H24.1a1.167 1.167 0 0 1 1.117 1.502l-2.8 9.333a1.166 1.166 0 0 1-1.117.832H7v2.333h12.834v2.334h-14A1.167 1.167 0 0 1 4.666 21V7.483ZM7 8.167v7h13.43l2.1-7H7Zm-.583 18.666a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm14 0a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
        fill={color}
      />
    </SVG>
  );
};
