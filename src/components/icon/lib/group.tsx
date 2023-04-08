import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const group = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 12 12" {...rest}>
      <G clip-path="url(#clip0_3836_67)">
        <Path
          d="M8 5.5C8.83 5.5 9.495 4.83 9.495 4C9.495 3.17 8.83 2.5 8 2.5C7.17 2.5 6.5 3.17 6.5 4C6.5 4.83 7.17 5.5 8 5.5ZM4 5.5C4.83 5.5 5.495 4.83 5.495 4C5.495 3.17 4.83 2.5 4 2.5C3.17 2.5 2.5 3.17 2.5 4C2.5 4.83 3.17 5.5 4 5.5ZM4 6.5C2.835 6.5 0.5 7.085 0.5 8.25V9C0.5 9.275 0.725 9.5 1 9.5H7C7.275 9.5 7.5 9.275 7.5 9V8.25C7.5 7.085 5.165 6.5 4 6.5ZM8 6.5C7.855 6.5 7.69 6.51 7.515 6.525C7.525 6.53 7.53 6.54 7.535 6.545C8.105 6.96 8.5 7.515 8.5 8.25V9C8.5 9.175 8.465 9.345 8.41 9.5H11C11.275 9.5 11.5 9.275 11.5 9V8.25C11.5 7.085 9.165 6.5 8 6.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3836_67">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
