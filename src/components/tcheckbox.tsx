import React from 'react';
import styled from 'styled-components/native';

import {color} from '../theme';
import {Icon} from './icon/ticon';

interface ContainerProps {
  size: number;
  radius: number;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px solid #ededed;
  border-radius: ${props => props.radius}px;
`;

export const CheckBox: React.FC<{
  checked: boolean;
  size: number;
  radius: number;
  onChange: (check?: boolean) => void;
}> = React.memo(({checked, onChange, size, radius}) => {
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
});
