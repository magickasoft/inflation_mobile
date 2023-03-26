import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const notInclude = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 12" {...rest}>
      <G clip-path="url(#clip0_3836_790)">
        <Path
          d="M2.6669 10.0001C2.53499 10.0001 2.40605 9.96098 2.29639 9.88768C2.18672 9.81438 2.10124 9.71022 2.05077 9.58835C2.00029 9.46648 1.98708 9.33238 2.01281 9.20301C2.03854 9.07363 2.10204 8.95479 2.1953 8.8615L8.86571 2.1911C8.99117 2.06789 9.16021 1.99921 9.33605 2.00001C9.5119 2.0008 9.68031 2.07101 9.80465 2.19535C9.92899 2.31969 9.9992 2.4881 9.99999 2.66395C10.0008 2.83979 9.93211 3.00883 9.8089 3.13429L3.1385 9.8047C3.07664 9.86674 3.00313 9.91594 2.9222 9.94949C2.84127 9.98303 2.75451 10.0002 2.6669 10.0001Z"
          fill={color}
        />
        <Path
          d="M9.33628 10.0001C9.24867 10.0002 9.1619 9.98303 9.08097 9.94949C9.00004 9.91594 8.92653 9.86674 8.86468 9.8047L2.19427 3.13429C2.07106 3.00883 2.00238 2.83979 2.00318 2.66395C2.00398 2.4881 2.07418 2.31969 2.19852 2.19535C2.32286 2.07101 2.49128 2.0008 2.66712 2.00001C2.84296 1.99921 3.01201 2.06789 3.13747 2.1911L9.80787 8.8615C9.90113 8.95479 9.96464 9.07363 9.99036 9.20301C10.0161 9.33238 10.0029 9.46648 9.95241 9.58835C9.90193 9.71022 9.81646 9.81438 9.70679 9.88768C9.59712 9.96098 9.46818 10.0001 9.33628 10.0001Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_790">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
