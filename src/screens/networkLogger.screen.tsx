import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import NetworkLogger from 'react-native-network-logger';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppStackParamList} from '../navigation/AppNavigator';

type NetworkLoggerScreenProps = StackScreenProps<
  AppStackParamList,
  'NetworkLogger'
>;

export const NetworkLoggerScreen: React.FC<NetworkLoggerScreenProps> = () => (
  <SafeAreaView edges={['bottom']} style={{flex: 1}}>
    <NetworkLogger />
  </SafeAreaView>
);
