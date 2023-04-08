declare var process: any;

import {Dimensions, Linking, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const isDev = process.env.NODE_ENV === 'development';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const OS = Platform.OS;

export const isRetina = PixelRatio.get() >= 2;
export const touchableArea = {top: 8, right: 8, bottom: 8, left: 8};
export const deviceWidth = width;
export const deviceHeight = height;

export function didRestoreFromBackground(
  appState: string,
  nextAppState: string,
  followInactive = false,
) {
  const validation = followInactive ? /inactive|background/ : /background/;
  return appState.match(validation) && nextAppState === 'active';
}

export const openURL = async (url: string, fail?: (e?: any) => void) => {
  if (await Linking.canOpenURL(url)) {
    try {
      await Linking.openURL(url);
    } catch (e) {
      fail && fail(e);
    }
  } else {
    fail && fail();
  }
};
