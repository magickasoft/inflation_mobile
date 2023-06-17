import V from '@react-native-community/voice';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {DefaultThemeScheme} from '../theme';

const Container = styled.View<{
  theme: DefaultThemeScheme;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
`;

const Text = styled.Text<{
  theme: DefaultThemeScheme;
}>`
  color: black;
  font-weight: bold;
`;

type VoiceProps = {onChangeText: (data: any) => void};

export const Voice: React.FC<VoiceProps> = React.memo(({onChangeText}) => {
  const {t} = useTranslation();
  const [isLoading, setLoading] = React.useState(false);

  const speechStartHandler = (e: any) => {
    console.log('speechStart successful', e);
  };

  const speechEndHandler = (e: any) => {
    setLoading(false);
    console.log('stop handler', e);
  };

  const speechResultsHandler = (e: any) => {
    const text = e.value[0];
    onChangeText(text);
  };

  const startRecording = async () => {
    setLoading(true);
    try {
      await V.start('ru-Ru');
    } catch (error) {
      console.log('error', error);
    }
  };

  const stopRecording = async () => {
    try {
      await V.stop();
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    V.onSpeechStart = speechStartHandler;
    V.onSpeechEnd = speechEndHandler;
    V.onSpeechResults = speechResultsHandler;
    return () => {
      V.destroy().then(V.removeAllListeners);
    };
  }, []);

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <TouchableOpacity onPress={startRecording}>
          <Text>{t('speak')}</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={stopRecording}>
        <Text>{t('stop')}</Text>
      </TouchableOpacity>
    </Container>
  );
});
