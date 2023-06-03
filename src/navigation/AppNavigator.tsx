import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {useAppState} from '../hooks/useAppState';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {AddEntityScreen} from '../screens/addEntity.screen';
import {PasswordResetScreen} from '../screens/passwordReset.screen';
import {SignInUpScreen} from '../screens/signInUp.screen';
import {deviceWidth, isIOS} from '../utils/ui';
import {BottomNavigator} from './BottomNavigator';
import {defaultScreenOptions} from './constants';

export type AppStackParamList = {
  Root: undefined;
  SignInUp: undefined;
  PasswordReset: undefined;
  NetworkLogger: undefined;
  AddEntity: undefined;
  Profile: undefined;
  History: undefined;
  HistoryScreen: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  useAppState();
  const {t} = useTranslation();
  const {initializing, user} = useFirebaseAuth();

  if (initializing) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={
        {
          ...defaultScreenOptions,
          headerShown: false,
          gestureResponseDistance: deviceWidth / 3,
          gestureDirection: 'horizontal',
          gestureEnabled: isIOS,
          animationEnabled: isIOS,
        } as any
      }>
      {!user ? (
        <>
          <Stack.Screen
            name="SignInUp"
            component={SignInUpScreen}
            options={{
              headerShown: false,
              title: '',
            }}
          />
          <Stack.Screen
            name="PasswordReset"
            component={PasswordResetScreen}
            options={{
              headerShown: true,
              title: t('passwordReset') as any,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomNavigator} />
        </>
      )}
      <Stack.Screen
        name="AddEntity"
        component={AddEntityScreen}
        options={{
          headerShown: true,
          title: t('add') as string,
        }}
      />
    </Stack.Navigator>
  );
};
