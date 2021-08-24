import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  contactView: {
    flexDirection: 'row',
    width: 45,
    justifyContent: 'center',
    height: 45,
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: 45,
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    opacity: 0.5,
    fontSize: 13,
    paddingVertical: 3,
  },

  fab: {
    backgroundColor: colors.primary,
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
