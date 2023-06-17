import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useToast} from 'react-native-toast-notifications';
import {ToastOptions} from 'react-native-toast-notifications/src/toast';
import styled from 'styled-components/native';

import {Button, Input} from '../components';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {emailSchema} from '../schemas';
import {color} from '../theme';

const TextInput = styled(Input).attrs(() => ({
  inputStyle: {
    fontSize: 16,
  },
}))`
  margin-bottom: 15px;
`;

const Form = styled.View`
  margin: 37px;
`;

type PasswordResetScreenProps = StackScreenProps<
  AppStackParamList,
  'PasswordReset'
>;

const initialFormValues = {email: ''};

const dangerToastOptions: ToastOptions = {type: 'danger', placement: 'top'};
const successToastOptions: ToastOptions = {type: 'success', placement: 'top'};

export const PasswordResetScreen: React.FC<PasswordResetScreenProps> = () => {
  const {t} = useTranslation();
  const toast = useToast();
  const {sendPasswordResetEmail} = useFirebaseAuth();

  const onSubmit = async ({email}: any, actions: any) => {
    try {
      await sendPasswordResetEmail(email);
      actions.resetForm();
      toast.show(t('passwordResetSuccessToast') as string, successToastOptions);
    } catch (e: any) {
      const message = e?.response?.data?.message || e?.message || e?.code;
      message && toast.show(message, dangerToastOptions);
    }
  };

  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={emailSchema}
        onSubmit={onSubmit}>
        {({
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
        }) => (
          <Form>
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              blurOnSubmit={false}
              autoFocus={false}
              autoCorrect={false}
              label={t('email')}
              placeholder={t('pEmail')}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
            />
            <Button
              disabled={!isValid}
              backgroundColor={color.Orange}
              textColor={color.White}
              text={t('send')}
              onPress={handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </SafeAreaView>
  );
};
