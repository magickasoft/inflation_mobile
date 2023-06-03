import React from 'react';
import {View} from 'react-native';

import {useKeyboardState} from '../hooks/useKeyboardState';

export const KeyboardHide: React.FC<{
  children: any;
  style?: any;
}> = React.memo(({children, style}) => {
  const keyboardState = useKeyboardState();

  return <View style={style}>{!keyboardState && children}</View>;
});
