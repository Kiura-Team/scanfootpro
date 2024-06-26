import {StyleSheet} from 'react-native';
import { normalize } from '../../../theme/Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    // backgroundColor: '#ffdddd',
    // justifyContent: 'space-between'
  },
  containerAuth: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ff5757',
    paddingVertical: 10,
    gap: 10
  },
  shoes:{
    width: '100%',
    height: 480,
    borderColor: 'red',
    // borderWidth: 1,
    marginTop: -100
  },
  title:{
    fontSize: normalize(50),
    color: Colors.primary,
    fontWeight: 'bold',
  }
});

export default styles;
