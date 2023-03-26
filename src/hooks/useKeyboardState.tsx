import React from 'react';
import {Keyboard} from 'react-native';

import {isAndroid} from '../utils/ui';

export const useKeyboardState = () => {
  const [openedKeyboard, setOpenedKeyboard] = React.useState(false);
  let keyboardDidShowListener: any = null;
  let keyboardDidHideListener: any = null;

  React.useEffect(() => {
    const keyboarShow = isAndroid ? 'keyboardDidShow' : 'keyboardWillShow';
    const keyboardHide = isAndroid ? 'keyboardDidHide' : 'keyboardWillHide';
    keyboardDidShowListener = Keyboard.addListener(keyboarShow, () =>
      setOpenedKeyboard(true),
    );
    keyboardDidHideListener = Keyboard.addListener(keyboardHide, () =>
      setOpenedKeyboard(false),
    );
    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  return openedKeyboard;
};
