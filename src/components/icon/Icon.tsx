import React from 'react';

import {get} from '../../utils/get';
import lib from './lib';

type IconProps = {
  name: any;
  size?: any;
  color?: any;
  width?: any;
  height?: any;
  opacity?: number;
  stroke?: string;
};

export const Icon: React.FC<IconProps> = React.memo(
  ({name, size, width, height, color, opacity, stroke, ...rest}) => {
    if (!name) {
      return null;
    }

    const svg = get(lib, name);

    if (!svg) {
      console.error(`Requested unknown icon '${name}'`);
      return null;
    }

    const svgWidth = size || width;
    const svgHeight = size || height;
    return React.createElement(svg, {
      ...rest,
      color,
      width: svgWidth,
      height: svgHeight,
      opacity,
      stroke,
    });
  },
);
