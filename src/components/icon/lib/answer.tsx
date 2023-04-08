import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const answer = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 19 18" {...rest}>
      <Path
        d="M4.54575 11.5001L0.833252 14.4167V1.50008C0.833252 1.27907 0.921049 1.06711 1.07733 0.910826C1.23361 0.754545 1.44557 0.666748 1.66659 0.666748H14.1666C14.3876 0.666748 14.5996 0.754545 14.7558 0.910826C14.9121 1.06711 14.9999 1.27907 14.9999 1.50008V11.5001H4.54575ZM3.96909 9.83342H13.3333V2.33341H2.49992V10.9876L3.96909 9.83342ZM6.66658 13.1667H15.1974L16.6666 14.3209V5.66675H17.4999C17.7209 5.66675 17.9329 5.75455 18.0892 5.91083C18.2455 6.06711 18.3333 6.27907 18.3333 6.50008V17.7501L14.6208 14.8334H7.49992C7.2789 14.8334 7.06694 14.7456 6.91066 14.5893C6.75438 14.4331 6.66658 14.2211 6.66658 14.0001V13.1667Z"
        fill={color}
      />
    </SVG>
  );
};