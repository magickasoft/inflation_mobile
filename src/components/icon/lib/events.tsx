import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const events = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 28 28" {...rest}>
      <Path
        fill={color}
        d="M17.884 12.377c1.622.338 3.396-1.349 3.963-3.768.567-2.42-.289-4.657-1.91-4.995-1.622-.34-3.396 1.348-3.963 3.767-.567 2.42.288 4.657 1.91 4.995ZM8.088 18.158c1.535-.622 2.04-2.757 1.127-4.768-.914-2.012-2.899-3.138-4.434-2.516-1.536.622-2.04 2.757-1.128 4.768.914 2.012 2.899 3.138 4.435 2.516ZM26.54 15.148c-.88 2.116-2.731 3.317-4.134 2.683-1.403-.635-1.827-2.864-.947-4.98.88-2.115 2.732-3.316 4.135-2.682 1.404.635 1.827 2.864.947 4.98ZM12.743 12.668c1.587-.476 2.23-2.772 1.438-5.127-.792-2.356-2.72-3.88-4.308-3.403-1.587.476-2.23 2.772-1.438 5.127.792 2.356 2.72 3.88 4.308 3.403ZM20.517 17.818c-4.907-5.164-9.114-2.038-10.867 0-2.453 2.718-2.745 4.53-2.629 4.926.176 1.132 1.262 3.091 4.207 1.868 3.68-1.529 5.433-.51 6.835-.17 1.122.272 2.103.34 2.454.34.701 0 2.173-.068 2.454-1.699.28-1.63-1.52-4.19-2.454-5.265Z"
      />
    </SVG>
  );
};
