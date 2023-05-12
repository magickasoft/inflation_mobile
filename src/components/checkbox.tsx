import React, {FC} from 'react';
import styled from 'styled-components/native';

import {color, DefaultThemeScheme} from '../theme';
import {Icon} from './icon/Icon';

interface ContainerProps {
  size: number;
  radius: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px solid #ededed;
  border-radius: ${props => props.radius}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid #ededed;
  border-radius: 6px;
`;

export const CountNumber = styled.Text<{theme: DefaultThemeScheme}>`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${({theme}) => theme.buttons.secondary.text};
`;

export const CheckBox: FC<{
  checked: boolean;
  size: number;
  radius: number;
  onChange: (check?: boolean) => void;
}> = ({checked, onChange, size, radius}) => {
  return (
    <Container
      size={size}
      radius={radius}
      onPress={() => {
        onChange(!checked);
      }}>
      {checked && (
        <Icon
          name={'checkboxArrow'}
          size={14}
          width={14}
          height={10}
          color={color.Orange}
        />
      )}
    </Container>
  );
};
