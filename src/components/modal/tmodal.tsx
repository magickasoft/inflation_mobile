import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import {useTranslation} from '../../i18n';
import {color} from '../../theme';
import {DismissKeyboardView} from '../dismissKeyboardView';
import {ModalWrapper} from './tmodalWrapper';
import {SwipeBar} from './tswipeBar';

const s = StyleSheet.create({
  container: {
    backgroundColor: color.White,
  },
  defaultText: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    fontSize: 14,
  },
  closeText: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    fontSize: 17,
    color: color.Black,
    fontWeight: '500',
  },
});

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 7px 7px 0;
`;

export enum ModalType {
  DynamicHeight = 'dynamicHeight',
  FullScreen = 'fullScreen',
}

export const Modal: React.FC<{
  children: any;
  type: ModalType;
  label?: string;
  title?: string;
  titleStyles?: any;
  contentStyles?: any;
  closeTextStyle?: any;
  allowView?: boolean;
  gesturesEnabled?: boolean;
  headerContent?: any;
  leftButton?: any;
  onClose?: () => void;
  isVisible?: boolean;
  direct?: 'center' | 'bottom';
}> = React.memo(
  ({
    onClose,
    label,
    title = '',
    titleStyles,
    contentStyles,
    children,
    type = ModalType.DynamicHeight,
    allowView = false,
    headerContent,
    leftButton,
    closeTextStyle,
    gesturesEnabled = false,
    isVisible,
    direct,
    ...props
  }) => {
    const {t} = useTranslation();
    const heightStyle = type === ModalType.FullScreen ? {flex: 1} : undefined;
    const Component = allowView ? View : DismissKeyboardView;

    const gestureProps = {
      onSwipe: onClose,
      swipeDirection: 'down',
      swipeThreshold: 80,
      scrollOffsetMax: 100,
    };

    const modalProps = {
      ...props,
      direct,
      isVisible,
      ...(gesturesEnabled ? gestureProps : {}),
    };

    return (
      <ModalWrapper {...modalProps}>
        <Component style={[s.container, contentStyles, heightStyle]}>
          <Header>
            {headerContent ? (
              headerContent()
            ) : (
              <>
                {leftButton || null}
                <Text style={[s.defaultText, titleStyles]}>{title}</Text>
                <TouchableOpacity onPress={onClose}>
                  <Text style={[s.closeText, closeTextStyle || {}]}>
                    {label || t('closeIt')}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Header>
          {children}
          {gesturesEnabled && <SwipeBar />}
        </Component>
      </ModalWrapper>
    );
  },
);
