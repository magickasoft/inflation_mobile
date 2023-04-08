import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const locationAttribute = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 13" {...rest}>
      <G clip-path="url(#clip0_3612_1490)">
        <Path
          d="M6.6 4.03502L5.125 6.00002L6.25 7.50002C6.415 7.72002 6.37 8.03502 6.15 8.20002C5.93 8.36502 5.615 8.32502 5.45 8.10002C4.925 7.40002 4.295 6.56502 3.9 6.03002C3.7 5.76502 3.3 5.76502 3.1 6.03002L1.1 8.69502C0.854996 9.03002 1.09 9.50002 1.5 9.50002H10.5C10.91 9.50002 11.145 9.03002 10.9 8.70002L7.4 4.03502C7.2 3.76502 6.8 3.76502 6.6 4.03502Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3612_1490">
          <Rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
