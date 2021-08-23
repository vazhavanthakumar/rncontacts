import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  logoImage: {
    height: '150@s',
    width: '150@s',
    alignSelf: 'center',
    marginTop: '50@s',
  },
  title: {
    fontSize: '21@s',
    textAlign: 'center',
    paddingTop: '20@s',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '17@s',
    textAlign: 'center',
    paddingVertical: '20@s',
    fontWeight: 'bold',
  },
  form: {
    paddingTop: '20@s',
  },
  createSection: {
    marginTop: '5@s',
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: '17@s',
    color: colors.primary,
    fontSize: '16@s',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: '17@s',
    fontWeight: 'bold',
  },
});
