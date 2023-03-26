import React from 'react';
import {useToast} from 'react-native-toast-notifications';
import {ToastOptions} from 'react-native-toast-notifications/src/toast';

import {useFirebaseAuth} from '../../hooks/useFirebaseAuth';
import {useTranslation} from '../../i18n';

enum ErrorCode {
  EmailAlreadyInUse = 'auth/email-already-in-use',
  InvalidEmail = 'auth/invalid-email',
  UserNotFound = 'auth/user-not-found',
  UserDisabled = 'auth/user-disabled',
  WrongPassword = 'auth/wrong-password',
  TooManyRequests = 'auth/too-many-requests',
}

const getLocaleKey = (code: string) =>
  ({
    [ErrorCode.EmailAlreadyInUse]: 'emailAlreadyInUse',
    [ErrorCode.InvalidEmail]: 'invalidEmail',
    [ErrorCode.UserNotFound]: 'userNotFound',
    [ErrorCode.UserDisabled]: 'userDisabled',
    [ErrorCode.WrongPassword]: 'wrongPassword',
    [ErrorCode.TooManyRequests]: 'tooManyRequests',
  }[code]);

const toastOptions: ToastOptions = {type: 'danger', placement: 'top'};

export const useSignInUp = () => {
  const {t} = useTranslation();
  const toast = useToast();
  const {createUserWithEmailAndPassword, signInWithEmailAndPassword} =
    useFirebaseAuth();
  const [isSignIn, setIsSignIn] = React.useState<boolean>(true);

  const fnAuth = isSignIn
    ? signInWithEmailAndPassword
    : createUserWithEmailAndPassword;

  const onSubmit = async (values: any) => {
    try {
      await fnAuth(values);
    } catch (e: any) {
      const message = e?.response?.data?.message || e?.message || e?.code;
      const key = getLocaleKey(e?.code);

      message && toast.show(key ? t(key) : message, toastOptions);
    }
  };

  return {
    isSignIn,
    setIsSignIn,
    onSubmit,
  };
};
