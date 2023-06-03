import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import {useTranslation} from '../../i18n';
import {DefaultThemeScheme} from '../../theme';
import {DismissKeyboardView} from '../dismissKeyboardView';
import {Icon} from '../icon/icon';
import {ModalWrapper} from './modalWrapper';

const Container = styled(DismissKeyboardView)<{
  theme: DefaultThemeScheme;
  numberOfElements: number;
}>`
  width: 100%;
  align-items: center;
  background-color: transparent;
  padding: 16px;
  height: ${({numberOfElements}) => `${96 + numberOfElements * 56}px`};
`;

const Row = styled.View<{
  theme: DefaultThemeScheme;
  numberOfElements: number;
  index: number;
}>`
  width: 100%;
  height: 56px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #d8d8d8;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  ${({numberOfElements, index}) =>
    index + 1 === numberOfElements && 'border-bottom-width: 0;'}
`;

const Label = styled.Text<{
  theme: DefaultThemeScheme;
}>`
  padding: 0 16px;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme}) => theme.colorPalette.color.Black};
`;

const StretchLabel = styled.Text<{
  theme: DefaultThemeScheme;
  withoutIcon: boolean;
}>`
  padding: 0 16px;
  font-size: 17px;
  font-weight: 500;
  color: ${({theme}) => theme.colorPalette.color.Black};
  flex: 1;
  ${({withoutIcon}) => withoutIcon && 'padding: 0 16px 0 0;'}
`;

const Wrapper = styled.View<{
  theme: DefaultThemeScheme;
}>`
  width: 100%;
  background-color: ${({theme}) => theme.colorPalette.color.White};
  border-radius: 8px;
`;

const Cancel = styled.View<{
  theme: DefaultThemeScheme;
}>`
  width: 100%;
  background-color: ${({theme}) => theme.colorPalette.color.White};
  border-radius: 8px;
  margin-top: 8px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const OptionsModal: React.FC<{
  onClose?: () => void;
  options?: any;
  isVisible: boolean;
}> = React.memo(({onClose, options = [], ...props}) => {
  const {t} = useTranslation();

  return (
    <ModalWrapper onClose={onClose} {...props}>
      <Container numberOfElements={options.length}>
        <Wrapper>
          {options.map((option: any, index: number) => {
            const handler = () => {
              if (onClose) {
                onClose();
              }
              setTimeout(() => option.onPress(), onClose ? 750 : 0);
            };
            return (
              <TouchableWithoutFeedback onPress={handler} key={option.label}>
                <Row numberOfElements={options.length} index={index}>
                  {option.icon && <Icon {...option.icon} />}
                  <StretchLabel withoutIcon={!option.icon}>
                    {option.label}
                  </StretchLabel>
                  {option.chevron && (
                    <Icon name="basic.chevron" width={9} height={13} />
                  )}
                </Row>
              </TouchableWithoutFeedback>
            );
          })}
        </Wrapper>

        <TouchableWithoutFeedback onPress={onClose}>
          <Cancel>
            <Label>{t('closeIt')}</Label>
          </Cancel>
        </TouchableWithoutFeedback>
      </Container>
    </ModalWrapper>
  );
});
