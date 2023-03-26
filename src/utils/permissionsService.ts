import messaging from '@react-native-firebase/messaging';
import {Linking, Platform} from 'react-native';
import RNPermissions, {PERMISSIONS, RESULTS} from 'react-native-permissions';

import {useTranslation} from '../i18n';

export const APP_TRACKING_TRANSPARENCY = 'appTrackingTransparency';
export const LOCATION = 'location';
export const CAMERA = 'camera';
export const PHOTO = 'photo';

export const permissions = {
  [APP_TRACKING_TRANSPARENCY]: PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
  [LOCATION]: Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  }),
  [CAMERA]: Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  }),
  [PHOTO]: Platform.select({
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  }),
};

export const openSettingsPermission = Platform.select({
  android: Linking.openSettings,
  ios: RNPermissions.openSettings,
});

export const PERMISSIONS_BUTTONS = () => {
  const {t} = useTranslation();
  return [
    {
      text: t('goToSettings'),
      onPress: openSettingsPermission,
    },
    {
      text: t('cancel'),
      style: 'cancel',
      onPress: () => {},
    },
  ];
};

export const checkPermission = (permission: any) =>
  new Promise<any>(async (resolve, reject) => {
    try {
      const status = await RNPermissions.check(permission);
      // console.log(`check - ${permission}::`, status);
      if (status === RESULTS.DENIED) {
        const requestStatus = await RNPermissions.request(permission);
        // console.log(`request - ${permission}::`, requestStatus);
        if (
          requestStatus === RESULTS.GRANTED ||
          requestStatus === RESULTS.LIMITED
        ) {
          resolve(status);
        } else {
          reject();
        }
      }
      if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
        resolve(status);
      }
      if (status === RESULTS.BLOCKED) {
        reject();
      }
    } catch (e) {
      console.log('Error:', e);
      reject();
    }
  });

export const checkNotificationPermission = () =>
  new Promise<any>(async (resolve, reject) => {
    try {
      const status = await messaging().hasPermission();
      if (status === messaging.AuthorizationStatus.NOT_DETERMINED) {
        await messaging().requestPermission();
      }
      resolve(status);
    } catch (e) {
      console.log('Error:', e);
      reject();
    }
  });
