import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const profileEditIcon = ({color = '#fff', ...props}) => {
  return (
    <Svg viewBox="0 0 18 20" {...props}>
      <Path
        d="M3.414 14L13.556 3.85799L12.142 2.44399L2 12.586V14H3.414ZM4.243 16H0V11.757L11.435 0.321992C11.6225 0.134521 11.8768 0.0292053 12.142 0.0292053C12.4072 0.0292053 12.6615 0.134521 12.849 0.321992L15.678 3.15099C15.8655 3.33852 15.9708 3.59283 15.9708 3.85799C15.9708 4.12316 15.8655 4.37746 15.678 4.56499L4.243 16ZM0 18H18V20H0V18Z"
        fill={color}
      />
    </Svg>
  );
};
