import React from 'react';
import {AppState} from 'react-native';

import {
  APP_TRACKING_TRANSPARENCY,
  checkNotificationPermission,
  checkPermission,
  LOCATION,
  permissions,
} from '../utils/permissionsService';
import {didRestoreFromBackground, isIOS} from '../utils/ui';

export const useAppState = () => {
  const [appState, setAppState] = React.useState(AppState.currentState);

  const appStateChange = (nextAppState: any) => {
    const isBackFromBackground = didRestoreFromBackground(
      appState,
      nextAppState,
      true,
    );
    if (isBackFromBackground) {
    }

    if (nextAppState === 'active') {
      checkNotificationPermission();
      checkPermission(permissions[LOCATION]);
      if (isIOS) {
        checkPermission(permissions[APP_TRACKING_TRANSPARENCY]);
      }
    }
    setAppState(nextAppState);
  };

  React.useEffect(() => {
    appStateChange(AppState.currentState);
    const listener = AppState.addEventListener('change', appStateChange);
    return () => {
      listener.remove();
    };
  }, []);

  return {
    appState,
    setAppState,
  };
};
