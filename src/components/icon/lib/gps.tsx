import React from 'react';
import SVG, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const gps = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 16 19" {...rest}>
      <G clip-path="url(#clip0_5688_2712)">
        <Path
          d="M14.6002 2.11715L14.6001 2.11748L12.8971 18.1975C12.897 18.1975 12.8969 18.1975 12.8968 18.1974C12.8961 18.1972 12.8955 18.1967 12.8951 18.1961C12.8951 18.1961 12.8951 18.1961 12.8951 18.1961L9.03761 12.362C8.91623 12.1784 8.71541 12.0627 8.49551 12.0495L1.50518 11.6305L1.50482 11.6305L1.50432 11.6303L1.50417 11.6301L14.599 2.11683L14.5993 2.11663L14.5993 2.11663L14.5998 2.11675L14.6001 2.11709L15.2243 1.79941L14.6001 2.11709L14.6002 2.11715Z"
          stroke={color}
          fill="white"
          stroke-width="1.4"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5688_2712">
          <Rect
            width="15.3"
            height="17.9742"
            fill="white"
            transform="translate(0 0.925781)"
          />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
