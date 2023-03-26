import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const profileDoorIcon = ({color = '#fff', ...props}) => {
  return (
    <Svg viewBox="0 0 20 19" {...props}>
      <Path
        d="M0 19V17H2V2.83499C2 2.35099 2.346 1.93699 2.821 1.85099L12.293 0.128991C12.619 0.0689905 12.931 0.285991 12.99 0.611991C12.997 0.646991 13 0.681991 13 0.718991V1.99899L17 1.99999C17.552 1.99999 18 2.44799 18 2.99999V17H20V19H16V3.99999H13V19H0ZM11 2.39599L4 3.66999V17H11V2.39599ZM10 8.99999V11H8V8.99999H10Z"
        fill={color}
      />
    </Svg>
  );
};
