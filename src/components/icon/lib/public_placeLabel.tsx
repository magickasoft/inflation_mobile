import React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const public_placeLabel = ({
  color = '#24B0FF',
  stroke = '#fff',
  ...props
}) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Circle
        cx="12"
        cy="12"
        r="11.5"
        fill={color}
        fill-opacity="0.5"
        stroke={stroke}
      />
      <G clip-path="url(#clip0_3823_325)">
        <Path
          d="M12 8.66667V7.33333C12 6.6 11.4 6 10.6667 6H6.66671C5.93337 6 5.33337 6.6 5.33337 7.33333V16.6667C5.33337 17.4 5.93337 18 6.66671 18H17.3334C18.0667 18 18.6667 17.4 18.6667 16.6667V10C18.6667 9.26667 18.0667 8.66667 17.3334 8.66667H12ZM10.6667 16.6667H6.66671V15.3333H10.6667V16.6667ZM10.6667 14H6.66671V12.6667H10.6667V14ZM10.6667 11.3333H6.66671V10H10.6667V11.3333ZM10.6667 8.66667H6.66671V7.33333H10.6667V8.66667ZM17.3334 16.6667H12V10H17.3334V16.6667ZM16 11.3333H13.3334V12.6667H16V11.3333ZM16 14H13.3334V15.3333H16V14Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3823_325">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="translate(4 4)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
