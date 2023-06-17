import {
  HeaderStyleInterpolators,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

import {Icon} from '../components';
import {color} from '../theme';

export const defaultCustomTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const defaultStyle = {
  backgroundColor: '#f2f2f2',
  borderBottomColor: '#f2f2f2',
  borderBottomWidth: StyleSheet.hairlineWidth,
};

const defaultTabsStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.6);',
  borderTopColor: '#f2f2f2',
  borderTopWidth: StyleSheet.hairlineWidth,
  elevation: 0,
};

export const headerStyle = {
  backgroundColor: '#f2f2f2',
  shadowColor: '#FF7500',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.15,
  shadowRadius: 20,
  elevation: 1,
};

export const defaultTabOptions: any = {
  headerStyle: headerStyle,
  headerTintColor: '#555555',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
  },
};

export const defaultTabBarOptions: any = {
  swipeEnabled: false,
  headerShown: false,
  scrollEnabled: false,
  tabBarActiveTintColor: '#FF7500',
  tabBarAllowFontScaling: true,
  tabBarInactiveTintColor: '#555555',
  tabBarPressColor: '#555555',
  tabBarShowIcon: true,
  tabBarShowLabel: true,
  tabBarIndicatorStyle: {
    backgroundColor: '#FF7500',
  },
  tabBarStyle: defaultTabsStyle,
  tabBarHideOnKeyboard: true,
};

type headerBackImageProps = {
  tintColor: string;
};

export const defaultScreenOptions = {
  headerMode: 'screen',
  headerBackTitle: 'Back',
  headerTintColor: '#FF7500',
  headerBackImage: ({tintColor}: headerBackImageProps) => (
    <Icon name="back" size={21} color={tintColor} />
  ),
  headerTitleStyle: {
    color: '#000000',
  },
};

export const navigationOptions = (
  navigation: any,
  {headerTransparent = false, ...props}: any = {},
) => ({
  headerTransparent,
  headerStyle: !headerTransparent ? defaultStyle : undefined,
  ...props,
});

export const customHeaderSettings: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: color.Black2,
  headerTitleStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
  },
  headerShown: true,
  headerStyle,
};

export const purchaseCustomHeaderSettings: StackNavigationOptions = {
  headerTintColor: color.Black2,
  headerShown: true,
  headerBackTitleVisible: false,
  headerStyle,
  headerTitleAlign: 'center',
};
