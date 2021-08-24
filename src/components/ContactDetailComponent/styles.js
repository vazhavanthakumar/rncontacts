import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    backgroundColor: colors.white,
  },
  detailPhoto: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  loading: {
    textAlign: 'center',
    top: '45%',
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.primary,
  },
  names: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  hrLine: {
    borderColor: colors.grey,
    height: 10,
    borderWidth: 0.4,
  },

  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  topCallOption: {
    alignItems: 'center',
  },

  middleText: {
    fontSize: 14,
    color: colors.primary,
    paddingVertical: 5,
  },

  middleCallOptions: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  phoneMobile: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },

  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
