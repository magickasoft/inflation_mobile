import React, {FC} from 'react';
import styled from 'styled-components/native';

import {CheckBox} from '../../components/';
import {DefaultThemeScheme} from '../../theme';
import {openURL} from '../../utils/ui';

const Container = styled.View`
  margin: 0 0 24px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.Text<{
  theme: DefaultThemeScheme;
}>`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: ${({theme}) => theme.text.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: ${({theme}) => theme.text.secondary};
`;

const Link = styled.TouchableOpacity<{
  theme: DefaultThemeScheme;
}>`
  width: 90%;
`;

const Checker = styled(CheckBox)<{
  theme: DefaultThemeScheme;
}>``;

export const SwitchItem: FC<{
  onValueChange: () => void;
  url: string;
  text: string;
  value: boolean;
}> = ({url, text, onValueChange, value}) => {
  return (
    <Container>
      <Link onPress={() => openURL(url)}>
        <Label>{text}</Label>
      </Link>
      <Checker checked={value} onChange={onValueChange} size={24} radius={6} />
    </Container>
  );
};
