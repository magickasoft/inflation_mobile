import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const favorite = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 28 28" {...rest}>
      <Path
        d="M11.667 3.5h4.667a9.333 9.333 0 0 1 0 18.667v4.083c-5.834-2.333-14-5.833-14-13.417A9.333 9.333 0 0 1 11.667 3.5ZM14 19.833h2.334a7 7 0 1 0 0-14h-4.667a7 7 0 0 0-7 7c0 4.212 2.872 6.96 9.333 9.894v-2.894Z"
        fill={color}
      />
    </SVG>
  );
};
