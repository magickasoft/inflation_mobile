import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';

export const DismissKeyboardHOC = (Component: any) => {
  return ({children, ...props}: {children: any}) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Component {...props}>{children}</Component>
    </TouchableWithoutFeedback>
  );
};

export const DismissKeyboardView = DismissKeyboardHOC(View);
