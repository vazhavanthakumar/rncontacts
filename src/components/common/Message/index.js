import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/themes/colors';
import styles from '../Message/styles';

const Message = ({
  retry,
  retryFn,
  onDismiss,
  message,
  primary,
  danger,
  info,
  success,
}) => {
  const [userDismissed, setDismissed] = useState(false);

  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }

    if (danger) {
      return colors.danger;
    }

    if (success) {
      return colors.success;
    }

    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <View style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {message && (
              <Text style={{color: colors.white, fontSize: 12}}>{message}</Text>
            )}
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{color: colors.white, paddingStart: 5, paddingEnd: 5}}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default Message;
