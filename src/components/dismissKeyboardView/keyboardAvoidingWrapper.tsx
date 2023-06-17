import React from 'react';
import {KeyboardAvoidingView, View} from 'react-native';

import {isAndroid} from '../../utils/ui';

type KeyboardAvoidingWrapperProps = {disableAvoiding: boolean};

export const KeyboardAvoidingWrapper: React.FC<KeyboardAvoidingWrapperProps> =
  React.memo(({disableAvoiding = false, ...props}) => {
    const Wrapper = isAndroid || disableAvoiding ? View : KeyboardAvoidingView;

    return <Wrapper {...props} behavior="padding" />;
  });
