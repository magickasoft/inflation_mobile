import React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const checkLang = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <Circle cx="10" cy="10" r="10" fill={color} />
      <G clip-path="url(#clip0_5451_931)">
        <Path
          d="M8.66649 12.1145L14.7945 5.98584L15.7378 6.92851L8.66649 13.9998L4.42383 9.75717L5.36649 8.81451L8.66649 12.1145Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5451_931">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="translate(2 2)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
