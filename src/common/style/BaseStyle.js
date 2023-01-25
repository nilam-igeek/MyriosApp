import {Dimensions} from 'react-native';

//*********// Error MassagePrecalculate Device Dimensions for better performance  //*********//

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

export default BaseStyle = {
  WIDTH: x,
  HEIGHT: y,
};
