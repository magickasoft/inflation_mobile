import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import React, {FC} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useToast} from 'react-native-toast-notifications';
import {ToastOptions} from 'react-native-toast-notifications/src/toast';
import styled from 'styled-components/native';

import {Button, Input, Text} from '../components';
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
  overflow: hidden;
  margin: 0 37px 37px 37px;
`;

type PasswordResetScreenProps = StackScreenProps<
  AppStackParamList,
  'PasswordReset'
>;

const initialFormValues = {email: ''};

const dangerToastOptions: ToastOptions = {type: 'danger', placement: 'top'};
const successToastOptions: ToastOptions = {type: 'success', placement: 'top'};

export const PasswordResetScreen: FC<PasswordResetScreenProps> = () => {
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
      <View>
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
              <Text variant="fiveteen" textAlign="center" pb="30">
                {t('passwordReset')}
              </Text>
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
                backgroundColor={color.Blue}
                textColor={color.White}
                text={t('send')}
                onPress={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
