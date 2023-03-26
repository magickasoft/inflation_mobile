import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const profileAppLogo = ({color = '#24B0FF', ...props}) => {
  return (
    <Svg viewBox="0 0 43 44" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2295 0C31.2901 0 40.2777 9.25492 40.4563 20.7421V20.8369L40.4576 20.8424V20.9403V21.0909V21.1888C40.4177 26.3425 39.1364 31.188 36.91 35.4163C40.2603 35.6354 42.9207 38.4956 42.9981 42.0237H43V42.9355C43 43.2612 42.8824 43.8256 42.5557 43.9647C42.2405 44.0991 41.7218 43.8179 41.417 43.6565C39.7455 42.7712 37.4749 42.3658 35.211 42.1804H32.0549L32.0528 42.1828H24.859C24.8406 42.1828 24.8223 42.1816 24.804 42.1792H20.2291V42.184L19.8945 42.1813C8.87686 41.9927 0 32.6226 0 21.0909C0 9.4428 9.05754 0 20.2295 0ZM20.2577 6.82349C27.7487 6.82349 33.8355 13.1062 33.9596 20.9052V20.9961C33.9596 26.4623 32.1635 31.4902 29.1549 35.4707H20.2577C12.6898 35.4707 6.55447 29.0576 6.55447 21.147C6.55447 13.2363 12.6898 6.82349 20.2577 6.82349ZM20.2288 14.3533C16.64 14.3533 13.7307 17.3818 13.7307 21.1178C13.7307 24.8539 16.64 27.8819 20.2288 27.8819C23.8176 27.8819 26.7269 24.8532 26.7269 21.1171C26.7269 17.3811 23.8176 14.3533 20.2288 14.3533Z"
        fill={color}
      />
    </Svg>
  );
};
