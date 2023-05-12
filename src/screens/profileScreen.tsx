import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {Button, DismissKeyboardView, ReceiptImage} from '../components';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {color, DefaultThemeScheme} from '../theme';

type ProfileScreenProps = StackScreenProps<AppStackParamList, 'Profile'>;

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

const Line = styled.View<{
  theme: DefaultThemeScheme;
}>`
  width: 100%;
  height: 15px;
`;

export const ProfileScreen: FC<ProfileScreenProps> = () => {
  const {t} = useTranslation();
  const {signOut} = useFirebaseAuth();
  const [source, setSource] = useState<any>(undefined);

  return (
    <Container scrollEnabled resetScrollToCoords={{x: 0, y: 0}}>
      <DismissKeyboard>
        <Form>
          <ReceiptImage source={source} onChangeSource={setSource} />
          <Line />
          <Button
            backgroundColor={color.Orange}
            textColor={color.White}
            text={t('signOutFromAccount')}
            onPress={signOut}
          />
        </Form>
      </DismissKeyboard>
    </Container>
  );
};
