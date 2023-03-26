import ImagePicker, {
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker';

import {useTranslation} from '../i18n';

export const useImageCropPicker = () => {
  const {t} = useTranslation();
  const pickerSettings: Options = {
    width: 1024,
    height: 1024,
    cropping: true,
    cropperToolbarTitle: t('editPhoto') as string,
    cropperCircleOverlay: true,
  };

  const openPicker = (
    func: (data: ImageOrVideo) => any,
    settings?: Options,
  ) => {
    ImagePicker.openPicker(settings || pickerSettings).then(data => func(data));
  };

  const openCamera = (
    func: (data: ImageOrVideo) => any,
    settings?: Options,
  ) => {
    ImagePicker.openCamera(settings || pickerSettings).then(data => func(data));
  };

  return {openPicker, openCamera};
};
