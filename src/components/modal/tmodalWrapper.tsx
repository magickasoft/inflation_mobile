import React from 'react';
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';

import {color, DefaultThemeScheme} from '../../theme';
import {deviceHeight, deviceWidth} from '../../utils/ui';

const Container = styled(RNModal)<{
  theme: DefaultThemeScheme;
  direct: 'center' | 'bottom';
}>`
  ${props =>
    props.direct === 'bottom'
      ? `justify-content: flex-end;
  margin: 0`
      : 'justify-content: center'}
`;

export const ModalWrapper: React.FC<{
  isVisible?: boolean;
  onClose?: () => void;
  style?: any;
  children: any;
  direct?: 'center' | 'bottom';
}> = React.memo(
  ({
    isVisible = false,
    onClose,
    style,
    children,
    direct = 'bottom',
    ...props
  }) => (
    <Container
      {...props}
      avoidKeyboard
      direct={direct}
      backdropOpacity={0.6}
      backdropColor={color.Black}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      style={style}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      {children}
    </Container>
  ),
);
