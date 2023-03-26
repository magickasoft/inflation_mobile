import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {useAppState} from '../hooks/useAppState';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {MainScreen} from '../screens/MainScreen';
import {PasswordResetScreen} from '../screens/passwordReset';
import {SignInUpScreen} from '../screens/SignInUpScreen';
import {deviceWidth} from '../utils/ui';

export type AppStackParamList = {
  Home: undefined;
  SignInUp: undefined;
  PasswordReset: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  useAppState();
  const {initializing, user} = useFirebaseAuth();

  if (initializing) {
    return null;
  }
  // console.log('user::', user);
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
          <Stack.Screen name="Home" component={MainScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
