import Geolocation from 'react-native-geolocation-service';

import {checkPermission, LOCATION, permissions} from './permissionsService';
import {isAndroid} from './ui';

const defaultOptions = {
  timeout: 2500,
  distanceFilter: 10,
  enableHighAccuracy: isAndroid,
};

export const getCurrentPosition = (options = defaultOptions) =>
  new Promise<any>(async (resolve, reject) =>
    Geolocation.getCurrentPosition(
      position => {
        const coords = position?.coords;
        coords
          ? resolve(coords)
          : reject(new Error('It is not possible to get the current position'));
      },
      reject,
      options,
    ),
  );

export const withCheckGetCurrentPosition = (options?: any) =>
  new Promise<any>(async (resolve, reject) => {
    try {
      await checkPermission(permissions[LOCATION]);
      const coords = await getCurrentPosition(options);
      resolve(coords);
    } catch (e) {
      reject(e);
      console.error(e);
    }
  });
