import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import NetworkLogger from 'react-native-network-logger';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppStackParamList} from '../navigation/AppNavigator';

type LoggerScreenProps = StackScreenProps<AppStackParamList, 'Logger'>;

export const LoggerScreen: FC<LoggerScreenProps> = () => (
  <SafeAreaView edges={['bottom']} style={{flex: 1}}>
    <NetworkLogger />
  </SafeAreaView>
);
