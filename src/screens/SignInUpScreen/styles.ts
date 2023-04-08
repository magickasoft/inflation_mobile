import styled from 'styled-components/native';

import {Input, KeyboardHide} from '../../components';

export const TextInput = styled(Input).attrs(() => ({
  inputStyle: {
    fontSize: 16,
  },
}))`
  margin-bottom: 15px;
`;

export const HideContent = styled(KeyboardHide)``;

export const Btn = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
`;

export const Form = styled.View`
  overflow: hidden;
  margin: 0 37px 37px 37px;
`;
