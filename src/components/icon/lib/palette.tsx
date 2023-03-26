import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const palette = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 15 15" {...rest}>
      <Path
        d="M10.0389 3.92353C10.0389 4.50045 9.57737 4.8466 9.11584 4.8466C8.6543 4.8466 8.19276 4.50045 8.19276 3.92353C8.19276 3.3466 8.6543 3.00045 9.11584 3.00045C9.57737 3.00045 10.0389 3.3466 10.0389 3.92353ZM5.88507 3.00045C5.30814 3.00045 4.96199 3.46199 4.96199 3.92353C4.96199 4.38507 5.42353 4.8466 5.88507 4.8466C6.46199 4.8466 6.80814 4.38507 6.80814 3.92353C6.80814 3.46199 6.46199 3.00045 5.88507 3.00045ZM3.92353 5.53891C3.3466 5.53891 3.00045 6.00045 3.00045 6.46199C3.00045 7.03891 3.46199 7.38507 3.92353 7.38507C4.38507 7.38507 4.8466 6.92353 4.8466 6.46199C4.96199 6.00045 4.50045 5.53891 3.92353 5.53891ZM11.0774 5.53891C10.5005 5.53891 10.1543 6.00045 10.1543 6.46199C10.1543 7.03891 10.6158 7.38507 11.0774 7.38507C11.6543 7.38507 12.0005 6.92353 12.0005 6.46199C12.0005 6.00045 11.6543 5.53891 11.0774 5.53891ZM9.00045 12.3466C9.00045 12.0005 8.88507 11.6543 8.6543 11.3081C8.53891 11.3081 8.53891 11.1928 8.53891 11.0774C8.53891 10.8466 8.76968 10.6158 9.00045 10.6158H10.1543C12.2312 10.6158 13.962 8.88507 13.962 6.80814C13.8466 3.69276 10.962 1.1543 7.50045 1.1543C4.03891 1.1543 1.1543 4.03891 1.1543 7.50045C1.1543 10.962 4.03891 13.8466 7.50045 13.8466C8.30814 13.8466 9.00045 13.1543 9.00045 12.3466ZM12.8081 6.80814C12.8081 8.30814 11.5389 9.57737 10.0389 9.57737H8.88507C8.07737 9.57737 7.50045 10.2697 7.50045 11.0774C7.50045 11.4235 7.61584 11.7697 7.84661 12.1158C7.84661 12.2312 7.96199 12.2312 7.96199 12.462C7.96199 12.6928 7.73122 12.9235 7.50045 12.9235C4.61584 12.8081 2.19276 10.3851 2.19276 7.50045C2.19276 4.61584 4.61584 2.19276 7.50045 2.19276C10.3851 2.19276 12.8081 4.26968 12.8081 6.80814Z"
        fill={color}
      />
    </SVG>
  );
};
