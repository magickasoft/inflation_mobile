import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const add = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 28 28" {...rest}>
      <Path
        fill={color}
        d="M14 24C8.477 24 4 19.523 4 14S8.477 4 14 4s10 4.477 10 10-4.477 10-10 10Zm-1-11H9v2h4v4h2v-4h4v-2h-4V9h-2v4Z"
      />
    </SVG>
  );
};
