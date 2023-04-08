declare var module: any;
import {NativeModules} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import {storage} from '../storage.mmkv';
import {isIOS} from '../utils/ui';
import {fallback, resources} from './i18n.options';

const STORE_LANGUAGE_KEY = '@app/lang';

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: false,
  init: () => {},
  detect: () => {
    const language = storage.getString(STORE_LANGUAGE_KEY);
    if (language) {
      return language;
    } else {
      const locale: string | undefined = isIOS
        ? NativeModules.SettingsManager.settings.AppleLocale || //IOS < 13
          NativeModules.SettingsManager.settings.AppleLanguages[0] //IOS >= 13
        : NativeModules.I18nManager.localeIdentifier; //ANDROID
      const deviceLanguage =
        locale &&
        ['ru', 'en'].includes(locale.slice(0, 2)) &&
        locale.slice(0, 2);
      const languageTag =
        deviceLanguage ||
        RNLocalize.findBestAvailableLanguage(Object.keys(resources))
          ?.languageTag ||
        fallback.languageTag;
      return languageTag;
    }
  },
  cacheUserLanguage: (language: string) => {
    storage.set(STORE_LANGUAGE_KEY, language);
  },
};

module.exports = {languageDetectorPlugin};
