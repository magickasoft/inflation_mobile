import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const architectural = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 24 24" {...rest}>
      <G clip-path="url(#clip0_3761_991)">
        <Path
          d="M16.24 11.5099L17.81 9.93992L14.06 6.18992L12.49 7.75992L8.35 3.62992C7.57 2.84992 6.3 2.84992 5.52 3.62992L3.62 5.52992C2.84 6.30992 2.84 7.57992 3.62 8.35992L7.75 12.4899L3.15 17.0999C3.05 17.1999 3 17.3199 3 17.4599V20.4999C3 20.7799 3.22 20.9999 3.5 20.9999H6.54C6.67 20.9999 6.8 20.9499 6.89 20.8499L11.51 16.2299L15.64 20.3599C16.96 21.6799 18.4 20.4299 18.47 20.3599L20.37 18.4599C21.15 17.6799 21.15 16.4099 20.37 15.6299L16.24 11.5099ZM9.18 11.0699L5.04 6.93992L6.93 5.03992L8.2 6.30992L7.73 6.79992C7.34 7.18992 7.34 7.81992 7.73 8.20992C8.12 8.59992 8.75 8.59992 9.14 8.20992L9.62 7.72992L11.07 9.17992L9.18 11.0699ZM17.06 18.9599L12.93 14.8299L14.83 12.9299L16.28 14.3799L15.8 14.8599C15.41 15.2499 15.41 15.8799 15.8 16.2699C16.19 16.6599 16.82 16.6599 17.21 16.2699L17.69 15.7899L18.96 17.0599L17.06 18.9599Z"
          fill={color}
        />
        <Path
          d="M20.71 7.03987C21.1 6.64987 21.1 6.01987 20.71 5.62987L18.37 3.28987C17.9 2.81987 17.25 2.99987 16.96 3.28987L15.13 5.11987L18.88 8.86987L20.71 7.03987Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3761_991">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </SVG>
  );
};