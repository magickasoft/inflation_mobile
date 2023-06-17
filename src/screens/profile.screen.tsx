import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {Button, ReceiptImage} from '../components';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {color} from '../theme';

type ProfileScreenProps = StackScreenProps<AppStackParamList, 'Profile'>;

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

export const ProfileScreen: FC<ProfileScreenProps> = () => {
  const {t} = useTranslation();
  const {signOut} = useFirebaseAuth();
  const [source, setSource] = useState<any>(undefined);

  return (
    <Container scrollEnabled resetScrollToCoords={{x: 0, y: 0}}>
      <ReceiptImage source={source} onChangeSource={setSource} />
      <Button
        backgroundColor={color.Orange}
        textColor={color.White}
        text={t('signOutFromAccount')}
        onPress={signOut}
      />
    </Container>
  );
};
