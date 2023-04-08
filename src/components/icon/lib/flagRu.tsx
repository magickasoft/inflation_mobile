import React from 'react';
import Svg, {Defs, G, Mask, Path, Use} from 'react-native-svg';

export const flagRu = ({...rest}) => {
  return (
    <Svg viewBox="0 0 28 20" {...rest}>
      <Defs>
        <Path id="a" d="M0 0h28v20H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Path stroke="#D3E9F8" fill="#E8F6FF" d="M.5.5h27v19H.5z" />
        <Path fill="#0161D3" d="M0 7h28v20H0z" mask="url(#b)" />
        <Path fill="#D80227" d="M0 13h28v20H0z" mask="url(#b)" />
      </G>
    </Svg>
  );
};
