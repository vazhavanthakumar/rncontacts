import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from '../../common/AppModal/styles';
import Icon from '../icon';
import PropTypes from 'prop-types';

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalFooter,
  modalBody,
  closeOnTouchOutSide,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (closeOnTouchOutSide) {
            setModalVisible(false);
          } else {
          }
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.headerView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon size={27} name="close" type="fa" />
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
              <View />
              <View />
              <View />
              <View />
              <View />
            </View>

            <View style={styles.footerSeparator} />

            <View style={styles.modalBody}>{modalBody}</View>
            {modalFooter}

            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutSide: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutSide: true,
};

export default AppModal;
