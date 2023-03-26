import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Text} from '../../components';
import {useTranslation} from '../../i18n';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {authSchema} from '../../schemas';
import {color} from '../../theme';
import {isDev} from '../../utils/ui';
import {Btn, Form, HideContent, TextInput} from './styles';
import {SwitchItem} from './switchItem';
import {useConventions} from './useConventions';
import {useSignInUp} from './useSignInUp';

type SignInUpScreenProps = StackScreenProps<AppStackParamList, 'SignInUp'>;

const initialFormValues = isDev
  ? {
      email: 'sjs-master@yandex.ru',
      password: 'Qwerty1239',
    }
  : {email: '', password: ''};

export const SignInUpScreen: FC<SignInUpScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const {isSignIn, setIsSignIn, onSubmit} = useSignInUp();
  const {disabled, switches} = useConventions();
  const renderSwitchItem = (props: any, index: number) => (
    <SwitchItem key={index} {...props} />
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
      <View>
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
              <HideContent>
                {isSignIn ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PasswordReset')}
                    style={{alignItems: 'flex-start'}}>
                    <Text
                      variant="normal"
                      mb="15"
                      color="blue"
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
                    color="blue"
                    textAlign="center">
                    {changeAuthLogicText}
                  </Text>
                </Btn>
                {!isSignIn && switches.map(renderSwitchItem)}
              </HideContent>
              <Button
                disabled={!isSignIn ? disabled || !isValid : !isValid}
                backgroundColor={color.Blue}
                textColor={color.White}
                text={buttonTitle}
                onPress={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
