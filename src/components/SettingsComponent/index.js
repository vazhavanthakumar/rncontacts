import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/themes/colors';
import AppModal from '../../components/common/AppModal';
import Icon from '../common/icon';

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  preferences,
}) => {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        modalFooter={<></>}
        closeOnTouchOutSide={false}
        modalBody={
          <View>
            {preferences.map(({name, isSelected, onPress}) => {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 5,
                  }}
                  key={name}>
                  {isSelected && <Icon name="check" type="entypo" size={17} />}
                  <Text
                    style={{
                      paddingLeft: isSelected ? 15 : 33,
                      fontSize: 17,
                      fontWeight: isSelected ? 'bold' : null,
                    }}>
                    {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        }
        title="Sort By"
        setModalVisible={setModalVisible}
      />

      <View style={{backgroundColor: colors.white}}>
        <ScrollView>
          {settingsOptions.map(({title, subTitle, onPress}) => {
            return (
              <TouchableOpacity onPress={onPress} key={title}>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                    paddingTop: 20,
                  }}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    {title}
                  </Text>
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
    </>
  );
};

export default SettingsComponent;
