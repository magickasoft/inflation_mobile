import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {useAppState} from '../hooks/useAppState';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {PasswordResetScreen} from '../screens/passwordReset';
import {SignInUpScreen} from '../screens/SignInUpScreen';
import {deviceWidth} from '../utils/ui';
import {BottomNavigator} from './BottomNavigator';

export type AppStackParamList = {
  Root: undefined;
  SignInUp: undefined;
  PasswordReset: undefined;
  Logger: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  useAppState();
  const {initializing, user} = useFirebaseAuth();

  if (initializing) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureResponseDistance: deviceWidth / 2,
        animationEnabled: false,
      }}>
      {!user ? (
        <>
          <Stack.Screen name="SignInUp" component={SignInUpScreen} />
          <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};
