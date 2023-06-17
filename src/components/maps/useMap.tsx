import React from 'react';
import {LatLng} from 'react-native-maps';

import {useMaptiler} from '../../hooks/useMaptiler';

export const useMap = () => {
  const maptiler = useMaptiler();
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
