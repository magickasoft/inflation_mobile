import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const lightbulb = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 12" {...rest}>
      <G clip-path="url(#clip0_3836_82)">
        <Path
          d="M4.50005 10.5C4.50005 10.775 4.72505 11 5.00005 11H7.00005C7.27505 11 7.50005 10.775 7.50005 10.5V10H4.50005V10.5ZM6.00005 1C4.07005 1 2.50005 2.57 2.50005 4.5C2.50005 5.69 3.09505 6.735 4.00005 7.37V8.5C4.00005 8.775 4.22505 9 4.50005 9H7.50005C7.77505 9 8.00005 8.775 8.00005 8.5V7.37C8.90505 6.735 9.50005 5.69 9.50005 4.5C9.50005 2.57 7.93005 1 6.00005 1ZM7.42505 6.55L7.00005 6.85V8H5.00005V6.85L4.57505 6.55C3.90005 6.08 3.50005 5.315 3.50005 4.5C3.50005 3.12 4.62005 2 6.00005 2C7.38005 2 8.50005 3.12 8.50005 4.5C8.50005 5.315 8.10005 6.08 7.42505 6.55Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_82">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
