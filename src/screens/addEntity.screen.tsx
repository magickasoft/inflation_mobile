import firestore from '@react-native-firebase/firestore';
import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {
  Button,
  DismissKeyboardView,
  Input,
  ReceiptImage,
  Voice,
} from '../components';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {color} from '../theme';
import {withCheckGetCurrentPosition} from '../utils/geolocationService';
import {normalizeCoordinate} from '../utils/normalizeCoordinate';

type AddEntityScreenProps = StackScreenProps<AppStackParamList, 'AddEntity'>;

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

const DismissKeyboard = styled(DismissKeyboardView)`
  flex: 1;
`;

const Form = styled.View`
  margin: 15px;
`;

const TextInput = styled(Input).attrs(() => ({
  inputStyle: {
    fontSize: 16,
  },
}))`
  margin-bottom: 15px;
`;

const initialFormValues = {productName: '', price: '', unit: '', quantity: ''};

export const AddEntityScreen: React.FC<AddEntityScreenProps> = () => {
  const {t} = useTranslation();
  const {currentUser} = useFirebaseAuth();
  const [source, setSource] = React.useState<any>(undefined);
  const [step, setStep] = React.useState<number>(0);

  const onSubmit = async (values: any, actions: any) => {
    try {
      const coords = await withCheckGetCurrentPosition();
      const latitude = normalizeCoordinate(coords?.latitude?.toString());
      const longitude = normalizeCoordinate(coords?.longitude?.toString());
      console.log('onSubmit::: ', values, source, latitude, longitude);
      const productDoc = firestore().collection('products').doc();
      await productDoc.set({
        ...values,
        user: currentUser?.uid,
        latitude,
        longitude,
      });
      actions.resetForm();
      setStep(0);
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
              {step === 0 && (
                <>
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
                  <Voice onChangeText={handleChange('productName')} />
                  <Button
                    backgroundColor={color.Orange}
                    textColor={color.White}
                    text={t('next')}
                    onPress={() => {
                      setStep(1);
                    }}
                  />
                </>
              )}
              {step === 1 && (
                <>
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
                  <Voice onChangeText={handleChange('price')} />
                  <Button
                    backgroundColor={color.Orange}
                    textColor={color.White}
                    text={t('next')}
                    onPress={() => {
                      setStep(2);
                    }}
                  />
                </>
              )}
              {step === 2 && (
                <>
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
                  <Voice onChangeText={handleChange('unit')} />
                  <Button
                    backgroundColor={color.Orange}
                    textColor={color.White}
                    text={t('next')}
                    onPress={() => {
                      setStep(3);
                    }}
                  />
                </>
              )}
              {step === 3 && (
                <>
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
                  <Voice onChangeText={handleChange('quantity')} />
                  <Button
                    disabled={!isValid}
                    backgroundColor={color.Orange}
                    textColor={color.White}
                    text={t('save')}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Form>
          )}
        </Formik>
      </DismissKeyboard>
    </Container>
  );
};
