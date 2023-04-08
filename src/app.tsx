import 'react-native-gesture-handler';
import './i18n/i18n.config';

import {ThemeProvider as RestyleThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {ToastProvider} from 'react-native-toast-notifications';

import {AppNavigator} from './navigation/AppNavigator';
import {ThemeSchemeProvider} from './theme';
import {restyleTheme} from './theme/restyleTheme';

enableFreeze();

const App = () => {
  return (
    <RestyleThemeProvider theme={restyleTheme}>
      <SafeAreaProvider>
        <ThemeSchemeProvider>
          <ToastProvider offsetTop={50}>
            <AppNavigator />
          </ToastProvider>
        </ThemeSchemeProvider>
      </SafeAreaProvider>
    </RestyleThemeProvider>
  );
};

export default App;
