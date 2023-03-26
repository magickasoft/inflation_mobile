import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const email = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <Path
        d="M10 0L19.05 5.4C19.35 5.58333 19.5833 5.83333 19.75 6.15C19.9167 6.46667 20 6.8 20 7.15V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20H2C1.45 20 0.979333 19.8043 0.588 19.413C0.196 19.021 0 18.55 0 18V7.15C0 6.8 0.0833333 6.46667 0.25 6.15C0.416667 5.83333 0.65 5.58333 0.95 5.4L10 0ZM10 11.65L17.8 7L10 2.35L2.2 7L10 11.65ZM10 14L2 9.2V18H18V9.2L10 14Z"
        fill={color}
      />
    </Svg>
  );
};
