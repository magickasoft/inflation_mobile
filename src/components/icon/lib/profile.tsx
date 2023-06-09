import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const profile = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 28 28" {...rest}>
      <Path
        d="M4.667 25.667a9.333 9.333 0 0 1 18.666 0H4.667Zm10.5-6.904v4.57h5.435a7.01 7.01 0 0 0-5.436-4.57Zm-2.334 4.57v-4.57a7.01 7.01 0 0 0-5.435 4.57h5.435ZM14 15.167c-3.868 0-7-3.133-7-7 0-3.868 3.132-7 7-7 3.867 0 7 3.132 7 7 0 3.867-3.133 7-7 7Zm0-2.334a4.665 4.665 0 0 0 4.666-4.666A4.665 4.665 0 0 0 14 3.5a4.665 4.665 0 0 0-4.667 4.667A4.665 4.665 0 0 0 14 12.833Z"
        fill={color}
      />
    </SVG>
  );
};
