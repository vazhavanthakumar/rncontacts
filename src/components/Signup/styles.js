import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    marginTop: 5,
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});
