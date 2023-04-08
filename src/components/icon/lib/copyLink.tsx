import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const copyLink = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 22 24" {...rest}>
      <Path
        d="M5.16667 4.99992V1.49992C5.16667 1.1905 5.28958 0.893753 5.50838 0.674961C5.72717 0.456168 6.02391 0.333252 6.33333 0.333252H20.3333C20.6428 0.333252 20.9395 0.456168 21.1583 0.674961C21.3771 0.893753 21.5 1.1905 21.5 1.49992V17.8333C21.5 18.1427 21.3771 18.4394 21.1583 18.6582C20.9395 18.877 20.6428 18.9999 20.3333 18.9999H16.8333V22.4999C16.8333 23.1439 16.3083 23.6666 15.6585 23.6666H1.67483C1.52098 23.6675 1.36846 23.638 1.22604 23.5798C1.08362 23.5216 0.954105 23.4358 0.844935 23.3274C0.735765 23.219 0.649092 23.0901 0.589897 22.9481C0.530702 22.8061 0.500151 22.6538 0.5 22.4999L0.5035 6.16658C0.5035 5.52258 1.0285 4.99992 1.67833 4.99992H5.16667ZM7.5 4.99992H16.8333V16.6666H19.1667V2.66659H7.5V4.99992Z"
        fill={color}
      />
    </SVG>
  );
};