import React, {forwardRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../common/icon';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import colors from '../../../assets/themes/colors';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => onFileSelected(images))
          .catch(error => {
            console.log('error :>> ', error);
          });
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => onFileSelected(images))
          .catch(error => {
            console.log('error :>> ', error);
          });
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={200}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.wrapper}>
        {options.map(({name, icon, onPress}) => {
          return (
            <TouchableOpacity
              style={styles.pickerOption}
              key={name}
              onPress={onPress}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
