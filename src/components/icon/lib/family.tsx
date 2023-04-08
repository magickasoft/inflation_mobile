import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const family = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 13" {...rest}>
      <G clip-path="url(#clip0_3612_1497)">
        <Path
          d="M6.725 1.98182V5.28015H10.525C10.525 3.3593 9.1095 1.76734 7.2665 1.50519C6.9815 1.46229 6.725 1.69108 6.725 1.98182ZM9.727 8.08754C10.2257 7.44408 10.525 6.6338 10.525 5.75679H3.609L3.286 5.0752C3.21 4.90837 3.039 4.80351 2.8585 4.80351H1.975C1.71375 4.80351 1.5 5.018 1.5 5.28015C1.5 5.5423 1.71375 5.75679 1.975 5.75679H2.5545C2.5545 5.75679 3.45225 7.6967 3.5615 7.86352C2.92975 8.20193 2.545 8.94549 2.735 9.74147C2.8775 10.342 3.3715 10.8234 3.97 10.9569C4.9675 11.1761 5.8605 10.4993 5.98875 9.56988H6.97675C7.105 10.4946 7.99325 11.1714 8.98125 10.9617C9.5845 10.833 10.0785 10.3563 10.2305 9.75577C10.3967 9.09324 10.164 8.47838 9.727 8.08754ZM4.35 10.0465C3.95575 10.0465 3.6375 9.72717 3.6375 9.33156C3.6375 8.93595 3.95575 8.61661 4.35 8.61661C4.74425 8.61661 5.0625 8.93595 5.0625 9.33156C5.0625 9.72717 4.74425 10.0465 4.35 10.0465ZM8.625 10.0465C8.23075 10.0465 7.9125 9.72717 7.9125 9.33156C7.9125 8.93595 8.23075 8.61661 8.625 8.61661C9.01925 8.61661 9.3375 8.93595 9.3375 9.33156C9.3375 9.72717 9.01925 10.0465 8.625 10.0465Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3612_1497">
          <Rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
