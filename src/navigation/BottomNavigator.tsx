import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

import {Icon} from '../components';
import {HistoryScreen} from '../screens/history.screen';
import {NetworkLoggerScreen} from '../screens/networkLogger.screen';
import {ProfileScreen} from '../screens/profile.screen';
import {
  defaultScreenOptions,
  defaultTabBarOptions,
  defaultTabOptions,
} from './constants';

export type BottomStackParamList = {
  AddEntity?: undefined;
  History?: undefined;
  HistoryScreen?: undefined;
  Profile?: undefined;
  NetworkLogger?: undefined;
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
        component={HistoryScreen}
        options={({navigation}) =>
          ({
            title: t('history'),
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
      initialRouteName="History"
      screenOptions={defaultTabBarOptions}>
      <Stack.Screen
        name="History"
        component={HistoryScreenStack}
        options={{
          title: t('history'),
          headerShown: false,
          tabBarLabel: t('history'),
          tabBarIcon: tabBarIcon('location'),
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
      <Stack.Screen
        name="NetworkLogger"
        component={NetworkLoggerScreen}
        options={{
          headerShown: false,
          title: t('logger'),
          tabBarLabel: t('logger'),
          tabBarIcon: tabBarIcon('settings'),
          ...defaultTabOptions,
        }}
      />
    </Stack.Navigator>
  );
};
