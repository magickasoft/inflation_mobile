import React from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import {useImageCropPicker} from '../hooks/useImageCropPicker';
import {useTranslation} from '../i18n';
import {color, DefaultThemeScheme} from '../theme';
import {Icon} from './icon/icon';
import {OptionsModal} from './modal';

const Container = styled.View<{
  theme: DefaultThemeScheme;
}>`
  position: relative;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity<{
  theme: DefaultThemeScheme;
}>`
  position: absolute;
  border-radius: 15px;
  width: 180px;
  height: 180px;
  z-index: 200;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled(FastImage)<{
  theme: DefaultThemeScheme;
}>`
  width: 180px;
  height: 180px;
  border-width: 1px;
  border-color: ${color.Orange};
  border-radius: 90px;
`;

type ReceiptImageProps = {source: any; onChangeSource: (data: any) => void};

export const ReceiptImage: React.FC<ReceiptImageProps> = React.memo(
  ({source, onChangeSource}) => {
    const {t} = useTranslation();
    const {openCamera, openPicker} = useImageCropPicker();
    const [visible, setVisible] = React.useState(false);

    const handleOpenPicker = () => {
      openPicker(data => onChangeSource(data));
    };

    const handleOpenCamera = () => {
      openCamera(data => onChangeSource(data));
    };

    const options = [
      {
        icon: {name: 'takeLib', size: 22, color: color.Orange},
        label: t('takeFromLibrary'),
        onPress: handleOpenPicker,
      },
      {
        icon: {name: 'takePhoto', size: 22, color: color.Orange},
        label: t('takePhoto'),
        onPress: handleOpenCamera,
      },
    ];
    return (
      <>
        <OptionsModal
          isVisible={visible}
          options={options}
          onClose={() => setVisible(false)}
        />
        <Container>
          <Image
            source={typeof source === 'number' ? source : {uri: source?.path}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <IconContainer onPress={() => setVisible(true)}>
            <Icon name={'photo'} size={15} color={color.Orange} />
          </IconContainer>
        </Container>
      </>
    );
  },
);
