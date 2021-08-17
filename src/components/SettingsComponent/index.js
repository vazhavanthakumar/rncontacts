import styles from '../SettingsComponent/styles';
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/themes/colors';

const SettingsComponent = ({settingsOptions}) => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <ScrollView>
        {settingsOptions.map(({title, subTitle, onPress}) => {
          return (
            <TouchableOpacity key={title}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>{title}</Text>
                {subTitle && (
                  <Text
                    style={{
                      fontSize: 14,
                      opacity: 0.6,
                      paddingTop: 5,
                    }}>
                    {subTitle}
                  </Text>
                )}
              </View>
              <View
                style={{
                  height: 0.4,
                  backgroundColor: colors.grey,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SettingsComponent;
