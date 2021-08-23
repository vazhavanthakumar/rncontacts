import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'flex-start',
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20,
  },
});
