import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import {
  Button,
  Input,
  KeyboardHide,
  ListItemWithSwitch,
  Text,
} from '../components';
import {useConventions} from '../hooks/useConventions';
import {useSignInUp} from '../hooks/useSignInUp';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {authSchema} from '../schemas';
import {color} from '../theme';
import {isDev} from '../utils/ui';

const TextInput = styled(Input).attrs(() => ({
  inputStyle: {
    fontSize: 16,
  },
}))`
  margin-bottom: 15px;
`;

const Btn = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
`;

const Form = styled.View`
  margin: 37px;
`;

type SignInUpScreenProps = StackScreenProps<AppStackParamList, 'SignInUp'>;

const initialFormValues = isDev
  ? {
      email: 'sjs-master@yandex.ru',
      password: 'Qwerty1239',
    }
  : {email: '', password: ''};

export const SignInUpScreen: React.FC<SignInUpScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const {isSignIn, setIsSignIn, onSubmit} = useSignInUp();
  const {disabled, switches} = useConventions();
  const renderSwitchItem = (props: any, index: number) => (
    <ListItemWithSwitch key={index} {...props} />
  );
  const buttonTitle = isSignIn ? t('signin') : t('createAnAccount');
  const changeAuthLogicText = isSignIn
    ? t('noAccountSignUp')
    : t('haveAccountLogIn');
  const titleText = isSignIn ? t('login') : t('registration');

  let password: any = null;
  const setInputRef = (el: any) => {
    password = el;
  };
  const focusPassword = () => password.focus();
  const blurPassword = () => password.blur();
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={authSchema}
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
              {titleText}
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
              onSubmitEditing={focusPassword}
              error={errors.email}
            />
            <TextInput
              inputRef={setInputRef}
              autoCapitalize="none"
              blurOnSubmit={false}
              autoFocus={false}
              autoCorrect={false}
              label={t('password')}
              placeholder={t('pPassword')}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              allowSecureTextEntry
              onSubmitEditing={blurPassword}
              error={errors.password}
            />
            <KeyboardHide>
              {isSignIn ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('PasswordReset')}
                  style={{alignItems: 'flex-start'}}>
                  <Text
                    variant="normal"
                    mb="15"
                    color="orange"
                    textAlign="center">
                    {t('forgotYourPassword')}
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
              <Btn onPress={() => setIsSignIn(!isSignIn)}>
                <Text
                  variant="normal"
                  mb="15"
                  color="orange"
                  textAlign="center">
                  {changeAuthLogicText}
                </Text>
              </Btn>
              {!isSignIn && switches.map(renderSwitchItem)}
            </KeyboardHide>
            <Button
              disabled={!isSignIn ? disabled || !isValid : !isValid}
              backgroundColor={color.Orange}
              textColor={color.White}
              text={buttonTitle}
              onPress={handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </SafeAreaView>
  );
};
