import React, {forwardRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../common/icon';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import colors from '../../../assets/themes/colors';

const ImagePicker = forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {},
    },
    {
      name: 'Choose from gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {},
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
      {options.map(({name, icon, onPress}) => {
        return (
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.pickerOption} key={name}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </RBSheet>
  );
});

export default ImagePicker;
