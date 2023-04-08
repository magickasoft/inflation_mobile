import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const activityRestrictions = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 13" {...rest}>
      <G clip-path="url(#clip0_3836_811)">
        <Path
          d="M5.5 3.00001C6.05228 3.00001 6.5 2.55229 6.5 2C6.5 1.44772 6.05228 1 5.5 1C4.94772 1 4.5 1.44772 4.5 2C4.5 2.55229 4.94772 3.00001 5.5 3.00001Z"
          fill={color}
        />
        <Path
          d="M9 5.94998C9 5.70498 8.82 5.50498 8.58 5.46498C7.955 5.35998 7.365 5.02497 6.965 4.58497L6.32 3.86997C6.235 3.77497 6.13 3.69997 6.015 3.64497C6.01 3.64497 6.01 3.63997 6.005 3.63997H6C5.815 3.53497 5.61 3.48497 5.375 3.51497C4.865 3.57497 4.5 4.03497 4.5 4.54997V7.49998C4.5 8.04999 4.95 8.49999 5.5 8.49999H8V10.5C8 10.775 8.225 11 8.5 11C8.775 11 9 10.775 9 10.5V8.24999C9 7.69999 8.55 7.24998 8 7.24998H6.5V5.52498C7 5.93998 7.7 6.29498 8.4 6.43498C8.71 6.49998 9 6.26498 9 5.94998ZM5.915 8.99999C5.71 9.57999 5.155 10 4.5 10C3.67 10 3 9.32999 3 8.49999C3 7.84499 3.42 7.29498 4 7.08498V6.04998C2.86 6.27998 2 7.28998 2 8.49999C2 9.87999 3.12 11 4.5 11C5.71 11 6.72 10.14 6.95 8.99999H5.915Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_811">
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