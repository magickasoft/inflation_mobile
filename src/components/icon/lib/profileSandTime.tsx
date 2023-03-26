import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const profileSandTime = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 16 24" {...props}>
      <Path
        d="M2 0H0V2H2V8.41406L5.58594 12L2 15.5859V22H0V24H16V22H14V15.5859L10.4141 12L14 8.41406V2H16V0H2ZM12 22H4V16.4141L7.41455 13H8.58594L12 16.4141V22ZM12 7.58594L8.58545 11H7.41406L4 7.58594V2H12V7.58594Z"
        fill={color}
      />
    </Svg>
  );
};
