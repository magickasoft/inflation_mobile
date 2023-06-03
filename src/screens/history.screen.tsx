// import firestore from '@react-native-firebase/firestore';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import {Button, DismissKeyboardView} from '../components';
import {useTranslation} from '../i18n';
import {AppStackParamList} from '../navigation/AppNavigator';
import {color} from '../theme';

type HistoryScreenProps = StackScreenProps<AppStackParamList, 'HistoryScreen'>;

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

const DismissKeyboard = styled(DismissKeyboardView)`
  flex: 1;
`;

export const HistoryScreen: React.FC<HistoryScreenProps> = () => {
  const {t} = useTranslation();
  return (
    <Container scrollEnabled resetScrollToCoords={{x: 0, y: 0}}>
      <DismissKeyboard>
        <Button
          backgroundColor={color.Orange}
          textColor={color.White}
          text={t('next')}
          onPress={() => {}}
        />
      </DismissKeyboard>
    </Container>
  );
};
