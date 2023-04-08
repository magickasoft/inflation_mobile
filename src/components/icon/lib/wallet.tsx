import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const wallet = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 21 18" {...props}>
      <Path
        d="M18.225 2.925H15.075V2.475C15.075 1.11375 13.9613 0 12.6 0H2.475C1.11375 0 0 1.11375 0 2.475V3.0825V3.6V5.4V7.2675V7.4925V15.525C0 16.8862 1.11375 18 2.475 18H18.225C19.5863 18 20.7 16.8862 20.7 15.525V13.275V7.65V5.4C20.7 4.03875 19.5863 2.925 18.225 2.925ZM1.575 3.0825V2.475C1.575 1.98 1.98 1.575 2.475 1.575H12.6C13.095 1.575 13.5 1.98 13.5 2.475V2.925H2.475C2.16 2.925 1.85625 2.98125 1.575 3.09375V3.0825ZM19.125 11.925H14.175C13.365 11.925 12.7125 11.2725 12.7125 10.4625C12.7125 9.6525 13.365 9 14.175 9H19.125V11.925ZM19.125 7.425H14.175C12.4988 7.425 11.1375 8.78625 11.1375 10.4625C11.1375 12.1388 12.4988 13.5 14.175 13.5H19.125V15.525C19.125 16.02 18.72 16.425 18.225 16.425H2.475C1.98 16.425 1.575 16.02 1.575 15.525V7.4925V7.2675V5.4C1.575 4.905 1.98 4.5 2.475 4.5H18.225C18.72 4.5 19.125 4.905 19.125 5.4V7.425Z"
        fill={color}
      />
    </Svg>
  );
};
