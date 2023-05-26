import {isDev} from '../utils/ui';

export interface DefaultLocalConfig {
  MAPTILER: string;
  baseURL: string;
  LOGGER: boolean;
}

export const config: DefaultLocalConfig = isDev
  ? require('./dev.json')
  : require('./prod.json');
