import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const star = ({color = '#FF933B', opacity = 1, ...props}) => {
  return (
    <Svg viewBox="0 0 18 17" {...props}>
      <Path
        opacity={opacity}
        d="M8.99994 13.695L3.71019 16.656L4.89144 10.71L0.440186 6.594L6.46044 5.88L8.99994 0.375L11.5394 5.88L17.5597 6.594L13.1084 10.71L14.2897 16.656L8.99994 13.695Z"
        fill={color}
      />
    </Svg>
  );
};
