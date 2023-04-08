import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const facebook = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 24 24" {...rest}>
      <Path
        d="M12.0002 0.333252C5.55666 0.333252 0.333496 5.55642 0.333496 11.9999C0.333496 17.8228 4.6 22.6493 10.1778 23.5254V15.3716H7.2145V11.9999H10.1778V9.42975C10.1778 6.50608 11.9185 4.89142 14.5843 4.89142C15.8607 4.89142 17.1953 5.11892 17.1953 5.11892V7.98892H15.7253C14.2752 7.98892 13.8237 8.88842 13.8237 9.81125V11.9999H17.0588L16.542 15.3716H13.8237V23.5254C19.4003 22.6504 23.6668 17.8216 23.6668 11.9999C23.6668 5.55642 18.4437 0.333252 12.0002 0.333252Z"
        fill={color}
      />
    </SVG>
  );
};