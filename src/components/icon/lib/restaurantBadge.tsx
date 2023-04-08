import React from 'react';
import SVG, {Circle, Path} from 'react-native-svg';

export const restaurantBadge = ({color = '#FF933B', ...rest}) => {
  return (
    <SVG viewBox="0 0 14 14" {...rest}>
      <Circle cx="7" cy="7" r="6.5" fill={color} stroke="white" />
      <Path
        d="M3.5 6.3877V6.0752C3.5 5.47624 3.81652 5.01395 4.44955 4.68832C5.08235 4.3629 5.9325 4.2002 7 4.2002C8.0675 4.2002 8.91777 4.3629 9.5508 4.68832C10.1836 5.01395 10.5 5.47624 10.5 6.0752V6.3877H3.5ZM3.5 7.79395V7.16895C3.71 7.16895 3.87625 7.11686 3.99875 7.0127C4.12125 6.90853 4.34583 6.85645 4.6725 6.85645C4.99917 6.85645 5.22083 6.90853 5.3375 7.0127C5.45417 7.11686 5.6175 7.16895 5.8275 7.16895C6.0375 7.16895 6.20375 7.11686 6.32625 7.0127C6.44875 6.90853 6.67333 6.85645 7 6.85645C7.32667 6.85645 7.55125 6.90853 7.67375 7.0127C7.79625 7.11686 7.9625 7.16895 8.1725 7.16895C8.3825 7.16895 8.54583 7.11686 8.6625 7.0127C8.77917 6.90853 9.00083 6.85645 9.3275 6.85645C9.65417 6.85645 9.88458 6.90853 10.0188 7.0127C10.1529 7.11686 10.3133 7.16895 10.5 7.16895V7.79395C10.1733 7.79395 9.95458 7.74186 9.84375 7.6377C9.73292 7.53353 9.5725 7.48145 9.3625 7.48145C9.1525 7.48145 8.98333 7.53353 8.855 7.6377C8.72667 7.74186 8.49917 7.79395 8.1725 7.79395C7.84583 7.79395 7.62125 7.74186 7.49875 7.6377C7.37625 7.53353 7.21 7.48145 7 7.48145C6.79 7.48145 6.62375 7.53353 6.50125 7.6377C6.37875 7.74186 6.15417 7.79395 5.8275 7.79395C5.50083 7.79395 5.27917 7.74186 5.1625 7.6377C5.04583 7.53353 4.8825 7.48145 4.6725 7.48145C4.4625 7.48145 4.29625 7.53353 4.17375 7.6377C4.05125 7.74186 3.82667 7.79395 3.5 7.79395ZM4.2 9.8002C4.0075 9.8002 3.84277 9.73905 3.7058 9.61676C3.5686 9.49426 3.5 9.34707 3.5 9.1752V8.2377H10.5V9.1752C10.5 9.34707 10.4315 9.49426 10.2946 9.61676C10.1574 9.73905 9.9925 9.8002 9.8 9.8002H4.2Z"
        fill="white"
      />
    </SVG>
  );
};