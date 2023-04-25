import 'react-native-gesture-handler';
import './i18n/i18n.config';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/ru';
import 'dayjs/locale/th';
import 'dayjs/locale/zh';

import {ThemeProvider as RestyleThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {ToastProvider} from 'react-native-toast-notifications';

import {AppNavigator} from './navigation/AppNavigator';
import {QueryClientProvider} from './QueryClientProvider';
import {ThemeSchemeProvider} from './theme';
import {restyleTheme} from './theme/restyleTheme';

enableFreeze();

const App = () => {
  return (
    <RestyleThemeProvider theme={restyleTheme}>
      <SafeAreaProvider>
        <QueryClientProvider>
          <ThemeSchemeProvider>
            <ToastProvider offsetTop={50}>
              <AppNavigator />
            </ToastProvider>
          </ThemeSchemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </RestyleThemeProvider>
  );
};

export default App;
