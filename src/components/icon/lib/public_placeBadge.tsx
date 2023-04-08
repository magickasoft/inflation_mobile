import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const public_placeBadge = ({color = '#943FFF', ...props}) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <Circle cx="7" cy="7" r="6.5" fill={color} stroke="white" />
      <Path
        d="M7 5.33333V4.66667C7 4.3 6.73 4 6.4 4H4.6C4.27 4 4 4.3 4 4.66667V9.33333C4 9.7 4.27 10 4.6 10H9.4C9.73 10 10 9.7 10 9.33333V6C10 5.63333 9.73 5.33333 9.4 5.33333H7ZM6.4 9.33333H4.6V8.66667H6.4V9.33333ZM6.4 8H4.6V7.33333H6.4V8ZM6.4 6.66667H4.6V6H6.4V6.66667ZM6.4 5.33333H4.6V4.66667H6.4V5.33333ZM9.4 9.33333H7V6H9.4V9.33333ZM8.8 6.66667H7.6V7.33333H8.8V6.66667ZM8.8 8H7.6V8.66667H8.8V8Z"
        fill="white"
      />
    </Svg>
  );
};
