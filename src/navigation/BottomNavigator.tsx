import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {Icon} from '../components';
import {config} from '../config';
import {LoggerScreen} from '../screens/logger';
// import {MainScreen} from '../screens/mainScreen';
import {MapScreen} from '../screens/mapScreen';
import {ProfileScreen} from '../screens/profileScreen';
import {defaultTabBarOptions, defaultTabOptions} from './constants';

export type BottomStackParamList = {
  Events?: undefined;
  Favorite?: undefined;
  AddEntity?: undefined;
  Map?: undefined;
  Profile?: undefined;
  Logger?: undefined;
};

const Stack = createBottomTabNavigator<BottomStackParamList>();

type tabBarIconProps = {
  focused: boolean;
};

const tabBarIcon =
  (name = 'home') =>
  ({focused}: tabBarIconProps) =>
    <Icon name={name} size={28} color={focused ? '#FF7500' : '#555555'} />;

export const BottomNavigator = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="Events"
      screenOptions={defaultTabBarOptions}>
      <Stack.Screen
        name="Events"
        component={View}
        options={{
          headerShown: false,
          tabBarLabel: t('events'),
          tabBarIcon: tabBarIcon('events'),
          ...defaultTabOptions,
        }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: t('map'),
          headerShown: false,
          tabBarLabel: t('map'),
          tabBarIcon: tabBarIcon('location'),
          ...defaultTabOptions,
        }}
      />
      <Stack.Screen
        name="AddEntity"
        component={View}
        options={{
          title: t('add'),
          headerShown: false,
          tabBarLabel: t('add'),
          tabBarIcon: tabBarIcon('add'),
          ...defaultTabOptions,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: t('profile'),
          tabBarLabel: t('profile'),
          tabBarIcon: tabBarIcon('profile'),
          ...defaultTabOptions,
        }}
      />
      {config.LOGGER && (
        <Stack.Screen
          name="Logger"
          component={LoggerScreen}
          options={{
            headerShown: false,
            title: t('logger'),
            tabBarLabel: t('logger'),
            tabBarIcon: tabBarIcon('settings'),
            ...defaultTabOptions,
          }}
        />
      )}
    </Stack.Navigator>
  );
};
