import {isDev} from '../utils/ui';

export interface DefaultLocalConfig {
  MAPTILER_ENGLISH: string;
  MAPTILER_RUSSIA: string;
  GOOGLE_MAP_API_KEY_ANDROID: string;
  GOOGLE_MAP_API_KEY_IOS: string;
  GOOGLE_MAP_API_KEY: string;
  baseURL: string;
  LOGGER: boolean;
}

export const config: DefaultLocalConfig = isDev
  ? require('./dev.json')
  : require('./prod.json');
