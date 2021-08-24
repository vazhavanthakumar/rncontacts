import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileView: {
    width: 90,
    height: 90,
    borderRadius: 10,
    alignSelf: 'center',
  },
  chooseText: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
