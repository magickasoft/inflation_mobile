import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const plus = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 10 10" {...rest}>
      <Path
        d="M4.28571 4.28572V0H5.71429V4.28572H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28572H4.28571Z"
        fill={color}
      />
    </SVG>
  );
};
