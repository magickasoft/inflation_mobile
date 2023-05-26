import React from 'react';
import {LatLng} from 'react-native-maps';

import {config} from '../../config';

export const useMap = () => {
  const maptiler = config.MAPTILER;
  const [activeMarker, setActiveMarker] = React.useState<string>();
  const setCoordinates = (marker: any): LatLng => {
    return {
      latitude: marker.lat,
      longitude: marker.lng,
    };
  };
  const toUserDelta = 0.01;
  return {maptiler, activeMarker, setActiveMarker, setCoordinates, toUserDelta};
};
