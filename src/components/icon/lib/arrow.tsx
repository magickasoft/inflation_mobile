import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const arrow = ({color = '#fff', ...rest}) => {
  return (
    <SVG viewBox="0 0 18 18" {...rest}>
      <Path
        fill={color}
        fillRule="nonzero"
        d="M18 9l-1.586-1.586-6.289 6.277V0h-2.25v13.691L1.586 7.414 0 9l9 9z"
      />
    </SVG>
  );
};
