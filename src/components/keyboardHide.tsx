import React, {FC} from 'react';
import {View} from 'react-native';

import {useKeyboardState} from '../hooks/useKeyboardState';

export const KeyboardHide: FC<{
  children: any;
  style?: any;
}> = ({children, style}) => {
  const keyboardState = useKeyboardState();

  return <View style={style}>{!keyboardState && children}</View>;
};
