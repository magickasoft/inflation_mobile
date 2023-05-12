import React, {FC, memo} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';

import {Text} from './Text';

interface ContainerProps {
  backgroundColor: string;
  height: number;
  disabled: boolean;
  marginHorizontal?: number;
  style?: any;
}

const Container = styled.View<ContainerProps>`
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  margin-horizontal: ${props => props.marginHorizontal ?? 38}px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Button: FC<{
  backgroundColor: string;
  textColor: string;
  text: string;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  marginHorizontal?: number;
}> = memo(
  ({
    backgroundColor,
    textColor,
    text,
    onPress,
    disabled,
    buttonStyle,
    textStyle,
    marginHorizontal,
  }) => {
    const style = StyleSheet.compose(textStyle, {color: textColor});
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled || false}
        style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
        <Container
          marginHorizontal={marginHorizontal}
          height={normalize(50)}
          backgroundColor={backgroundColor}
          disabled={disabled || false}
          style={buttonStyle}>
          <Text variant="three" style={style}>
            {text}
          </Text>
        </Container>
      </Pressable>
    );
  },
);
