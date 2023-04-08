import React, {FC} from 'react';
import ImageView from 'react-native-image-viewing';
import {ImageSource} from 'react-native-image-viewing/dist/@types';

import {color} from '../../theme';

export const ImageViewer: FC<{
  visible: boolean;
  imageIndex: number;
  onRequestClose?: () => void;
  images: ImageSource[];
}> = ({
  visible = false,
  imageIndex = 0,
  onRequestClose = () => {},
  images = [],
  ...props
}) => {
  return (
    <ImageView
      animationType="fade"
      backgroundColor={color.Black}
      visible={visible}
      imageIndex={imageIndex}
      onRequestClose={onRequestClose}
      images={images}
      {...props}
    />
  );
};
