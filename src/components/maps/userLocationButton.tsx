import React from 'react';
import styled from 'styled-components/native';

import {Icon} from '../icon/Icon';

type ContainerProps = {
  bottom: number;
  right: number;
  size: number;
  radius: number;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${props => props.bottom}px;
  right: ${props => props.right}px;
  z-index: 0;
  background: white;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.radius}px;
`;

export const UserLocationButton: React.FC<{
  onPress: () => void;
  bottom: number;
  right: number;
  size: number;
  radius: number;
  iconSize: number;
}> = React.memo(({onPress, bottom, right, size, radius, iconSize}) => {
  return (
    <Container
      onPress={onPress}
      bottom={bottom}
      right={right}
      size={size}
      radius={radius}>
      <Icon name={'location'} size={iconSize} />
    </Container>
  );
});
