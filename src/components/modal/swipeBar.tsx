import React from 'react';
import styled from 'styled-components/native';

import {DefaultThemeScheme} from '../../theme';

const Container = styled.View`
  position: absolute;
  top: -25px;
  left: 0;
  width: 100%;
  height: 25px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RoundedBar = styled.View<{theme: DefaultThemeScheme}>`
  background-color: ${({theme}) => theme.colorPalette.color.Black};
  width: 40px;
  height: 5px;
  border-radius: 5px;
`;

export const SwipeBar: React.FC = React.memo(() => (
  <Container>
    <RoundedBar />
  </Container>
));
