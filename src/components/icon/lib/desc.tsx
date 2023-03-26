import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const desc = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 24 24" {...rest}>
      <Path
        d="M21.1 2.9002C20 1.8002 18.1 1.8002 16.9 2.9002L8.79999 10.8002C8.09999 11.5002 7.59999 12.4002 7.39999 13.4002L6.99999 15.6002C6.89999 15.9002 6.99999 16.3002 7.29999 16.5002C7.49999 16.7002 7.69999 16.8002 7.99999 16.8002H8.19999L10.4 16.4002C11.4 16.2002 12.3 15.7002 13 15.0002L21.1 7.0002C21.7 6.5002 22 5.7002 22 4.9002C22 4.1002 21.7 3.4002 21.1 2.9002ZM11.7 13.5002C11.3 13.9002 10.7 14.2002 10.1 14.3002L9.29999 14.5002L9.49999 13.8002C9.59999 13.2002 9.89999 12.7002 10.4 12.2002L16.6 6.10019L18 7.4002L11.7 13.5002ZM19.7 5.6002L19.3 6.0002L17.9 4.7002L18.3 4.3002C18.5 4.1002 18.8 4.0002 19 4.0002C19.3 4.0002 19.5 4.1002 19.7 4.3002C19.9 4.5002 20 4.7002 20 4.9002C20 5.1002 20 5.4002 19.7 5.6002Z"
        fill={color}
      />
      <Path
        d="M20 9.9C19.4 9.9 19 10.3 19 10.9V16C19 17.7 17.7 19 16 19H8C6.3 19 5 17.7 5 16V8C5 6.3 6.3 5 8 5H13C13.6 5 14 4.6 14 4C14 3.4 13.6 3 13 3H8C5.2 3 3 5.2 3 8V16C3 18.8 5.2 21 8 21H16C18.8 21 21 18.8 21 16V10.9C21 10.4 20.6 9.9 20 9.9Z"
        fill={color}
      />
    </SVG>
  );
};
