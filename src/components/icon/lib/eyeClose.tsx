import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const eyeClose = ({color = '#C5CBD8', ...rest}) => {
  return (
    <SVG viewBox="0 0 20 11" {...rest}>
      <Path
        d="M7.78498 10.6516L6.17581 10.22L6.83165 7.7708C5.84995 7.40874 4.93758 6.8811 4.13415 6.2108L2.33998 8.0058L1.16081 6.82663L2.95581 5.03247C1.94254 3.81893 1.26172 2.3631 0.97998 0.807467L2.61998 0.508301C3.25248 4.00997 6.31581 6.66663 9.99998 6.66663C13.6833 6.66663 16.7475 4.00997 17.38 0.508301L19.02 0.806634C18.7386 2.36248 18.0581 3.81861 17.045 5.03247L18.8391 6.82663L17.66 8.0058L15.8658 6.2108C15.0624 6.8811 14.15 7.40874 13.1683 7.7708L13.8241 10.2208L12.215 10.6516L11.5583 8.20163C10.5269 8.37837 9.47302 8.37837 8.44165 8.20163L7.78498 10.6516Z"
        fill={color}
      />
    </SVG>
  );
};