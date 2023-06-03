import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {Button} from '../components';
import {useFirebaseAuth} from '../hooks/useFirebaseAuth';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {color, DefaultThemeScheme} from '../theme';

type ProfileScreenProps = StackScreenProps<AppStackParamList, 'Profile'>;

const Container = styled(KeyboardAwareScrollView)<{
  theme: DefaultThemeScheme;
}>`
  flex: 1;
  margin: 20px 15px;
`;

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {t} = useTranslation();
  const {signOut} = useFirebaseAuth();

  return (
    <Container scrollEnabled resetScrollToCoords={{x: 0, y: 0}}>
      <Button
        backgroundColor={color.Orange}
        textColor={color.White}
        text={t('signOutFromAccount')}
        onPress={signOut}
      />
    </Container>
  );
};
