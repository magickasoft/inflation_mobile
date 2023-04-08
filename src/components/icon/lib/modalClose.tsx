import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const modalClose = ({color = '#C5CBD8', ...rest}) => {
  return (
    <SVG viewBox="0 0 18 18" {...rest}>
      <Path
        d="M9.00007 7.11465L15.6001 0.514648L17.4854 2.39998L10.8854 8.99998L17.4854 15.6L15.6001 17.4853L9.00007 10.8853L2.40007 17.4853L0.51474 15.6L7.11474 8.99998L0.51474 2.39998L2.40007 0.514648L9.00007 7.11465Z"
        fill={color}
      />
    </SVG>
  );
};
