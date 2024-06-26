import {StyleSheet} from 'react-native';
import {Colors, normalize} from '../../../theme/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffdddd',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  containerAuth: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ff5757',
    paddingVertical: 10,
    gap: 10,
  },
  shoes: {
    width: '100%',
    height: 480,
    borderColor: 'red',
    // borderWidth: 1,
    marginTop: -100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#6200ee',
  },
});

export default styles;
