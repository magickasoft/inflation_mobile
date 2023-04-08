import firestore from '@react-native-firebase/firestore';
import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import React, {FC, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {Button, DismissKeyboardView, Input} from '../../components';
import {useFirebaseAuth} from '../../hooks/useFirebaseAuth';
import {useTranslation} from '../../i18n';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {color, DefaultThemeScheme} from '../../theme';
import {ReceiptImage} from './ReceiptImage';

type MainScreenProps = StackScreenProps<AppStackParamList>;

const Container = styled(KeyboardAwareScrollView)<{
  theme: DefaultThemeScheme;
}>`
  flex: 1;
`;

const DismissKeyboard = styled(DismissKeyboardView)`
  flex: 1;
`;

const Form = styled.View`
  margin-top: 20px;
  flex: 1;
  overflow: hidden;
  margin: 0 15px 15px 15px;
`;

const TextInput = styled(Input).attrs(() => ({
  inputStyle: {
    fontSize: 16,
  },
}))`
  margin-bottom: 15px;
`;

const initialFormValues = {productName: '', price: '', unit: '', quantity: ''};

export const MainScreen: FC<MainScreenProps> = () => {
  const {t} = useTranslation();
  const {signOut, currentUser, sendEmailVerification} = useFirebaseAuth();
  const [source, setSource] = useState<any>(undefined);
  const onSubmit = async (values: any, actions: any) => {
    console.log('onSubmit::: ', values, source);
    try {
      const productDoc = firestore().collection('products').doc();
      await productDoc.set({...values, user: currentUser?.uid});
      actions.resetForm();
    } catch (e: any) {
      console.log('onSubmit error::: ', e);
    }
  };
  return (
    <Container scrollEnabled resetScrollToCoords={{x: 0, y: 0}}>
      <DismissKeyboard>
        <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
          {({
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
          }) => (
            <Form>
              <ReceiptImage source={source} onChangeSource={setSource} />
              <TextInput
                keyboardType="default"
                autoCapitalize="none"
                blurOnSubmit={false}
                autoFocus={false}
                autoCorrect={false}
                label={t('productName')}
                placeholder={t('pProductName')}
                value={values.productName}
                onChangeText={handleChange('productName')}
                onBlur={handleBlur('productName')}
                error={errors.productName}
              />
              <TextInput
                keyboardType="default"
                autoCapitalize="none"
                blurOnSubmit={false}
                autoFocus={false}
                autoCorrect={false}
                label={t('price')}
                placeholder={t('pPrice')}
                value={values.price}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                error={errors.price}
              />
              <TextInput
                keyboardType="default"
                autoCapitalize="none"
                blurOnSubmit={false}
                autoFocus={false}
                autoCorrect={false}
                label={t('unit')}
                placeholder={t('pUnit')}
                value={values.unit}
                onChangeText={handleChange('unit')}
                onBlur={handleBlur('unit')}
                error={errors.unit}
              />
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                blurOnSubmit={false}
                autoFocus={false}
                autoCorrect={false}
                label={t('quantity')}
                placeholder={t('pQuantity')}
                value={values.quantity}
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                error={errors.quantity}
              />
              <Button
                disabled={!isValid}
                backgroundColor={color.Blue}
                textColor={color.White}
                text={t('save')}
                onPress={handleSubmit}
              />
              <Button
                backgroundColor={color.Blue}
                textColor={color.White}
                text={t('verifyMail')}
                onPress={sendEmailVerification}
              />
              <Button
                backgroundColor={color.Blue}
                textColor={color.White}
                text={t('signOutFromAccount')}
                onPress={signOut}
              />
            </Form>
          )}
        </Formik>
      </DismissKeyboard>
    </Container>
  );
};
