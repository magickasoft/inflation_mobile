import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const starDetails = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 15 15" {...rest}>
      <G clip-path="url(#clip0_4987_2164)">
        <Path
          d="M7.5 11.363L3.25139 13.75L4.20015 8.95661L0.625 5.63847L5.46033 5.06288L7.5 0.625L9.53967 5.06288L14.375 5.63847L10.7999 8.95661L11.7486 13.75L7.5 11.363ZM7.5 9.9772L10.0583 11.4144L9.48666 8.52854L11.639 6.53028L8.72766 6.18384L7.5 3.51204L6.27234 6.18444L3.36103 6.53028L5.51334 8.52854L4.94168 11.4144L7.5 9.9772Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4987_2164">
          <Rect width="15" height="15" fill="white" />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
