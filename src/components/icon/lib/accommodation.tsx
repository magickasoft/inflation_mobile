import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const accommodation = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <G opacity="0.9" clip-path="url(#clip0_4732_18)">
        <Path
          opacity="0.9"
          d="M5.3 21.4H4.2L3.485 19.2H2V13.6725C2 13.0675 2.2156 12.5542 2.6468 12.1325C3.07727 11.7108 3.595 11.5 4.2 11.5V8.2C4.2 7.595 4.4156 7.07727 4.8468 6.6468C5.27727 6.2156 5.795 6 6.4 6H19.6C20.205 6 20.7231 6.2156 21.1543 6.6468C21.5848 7.07727 21.8 7.595 21.8 8.2V11.5C22.405 11.5 22.9231 11.7152 23.3543 12.1457C23.7848 12.5769 24 13.095 24 13.7V19.2H22.515L21.8 21.4H20.7L19.985 19.2H6.015L5.3 21.4ZM14.1 11.5H19.6V8.2H14.1V11.5ZM6.4 11.5H11.9V8.2H6.4V11.5ZM4.2 17H21.8V13.7H4.2V17Z"
          fill={color}
          fill-opacity="0.8"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4732_18">
          <Rect width="26" height="26" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
