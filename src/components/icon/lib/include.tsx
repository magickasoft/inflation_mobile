import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const include = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 13" {...rest}>
      <G clip-path="url(#clip0_3836_782)">
        <Path
          d="M9.80714 3.19286C9.55 2.93571 9.16428 2.93571 8.90714 3.19286L4.08571 8.01429L2.09286 6.02143C1.83571 5.76429 1.45 5.76429 1.19286 6.02143C0.935714 6.27857 0.935714 6.66429 1.19286 6.92143L3.63571 9.36429C3.76429 9.49286 3.89286 9.55714 4.08571 9.55714C4.27857 9.55714 4.40714 9.49286 4.53571 9.36429L9.80714 4.09286C10.0643 3.83571 10.0643 3.45 9.80714 3.19286Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_782">
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
