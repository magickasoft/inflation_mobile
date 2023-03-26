import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const participationRequirement = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 13" {...rest}>
      <G clip-path="url(#clip0_3836_797)">
        <Path
          d="M3.5 2C3.225 2 3 2.225 3 2.5V5C3 6.485 4.08 7.715 5.5 7.955V10H4.5C4.225 10 4 10.225 4 10.5C4 10.775 4.225 11 4.5 11H7.5C7.775 11 8 10.775 8 10.5C8 10.225 7.775 10 7.5 10H6.5V7.955C7.92 7.715 9 6.485 9 5V2.5C9 2.225 8.775 2 8.5 2H3.5ZM8 4.5H4V3H8V4.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_797">
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
