import React from 'react';
import {KeyboardAvoidingView, View} from 'react-native';

import {isAndroid} from '../../utils/ui';

export const KeyboardAvoidingWrapper = ({
  disableAvoiding = false,
  ...props
}) => {
  const Wrapper = isAndroid || disableAvoiding ? View : KeyboardAvoidingView;

  return <Wrapper {...props} behavior="padding" />;
};
