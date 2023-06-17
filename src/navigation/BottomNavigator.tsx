import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {Icon} from '../components';
import {MapScreen} from '../screens/map.screen';
import {ProfileScreen} from '../screens/profile.screen';
import {
  defaultScreenOptions,
  defaultTabBarOptions,
  defaultTabOptions,
} from './constants';

export type BottomStackParamList = {
  Events?: undefined;
  Favorite?: undefined;
  AddEntity?: undefined;
  Map?: undefined;
  Profile?: undefined;
  Logger?: undefined;
};

const Stack = createBottomTabNavigator<BottomStackParamList>();
const HistoryStack = createStackNavigator<{HistoryScreen?: undefined}>();

const Btn = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const HistoryScreenStack = () => {
  const {t} = useTranslation();
  return (
    <HistoryStack.Navigator screenOptions={defaultScreenOptions as any}>
      <HistoryStack.Screen
        name="HistoryScreen"
        component={View}
        options={({navigation}) =>
          ({
            title: t('add'),
            headerRight: () =>
              (
                <Btn onPress={() => navigation.navigate('AddEntity')}>
                  <Icon name="plus" size={26} color="#FF7500" />
                </Btn>
              ) as any,
          } as any)
        }
      />
    </HistoryStack.Navigator>
  );
};

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
    </Stack.Navigator>
  );
};
