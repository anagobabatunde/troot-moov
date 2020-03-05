import { createStackNavigator } from 'react-navigation-stack';
import Compte from "../screens/Compte"
import Chartre from '../screens/Chartre'
import Qrcode from "../screens/Qrcode"

export default createStackNavigator({
  Compte: {
      screen: Compte,
      navigationOptions: {
          headerTitle: 'Mon Compte',
          headerLeft: null
        }
    },
    Chartre: {
        screen: Chartre,
        navigationOptions: {
            headerTitle: 'Chartre',
            headerLeft: null
          }
      },
      Qrcode: {
        screen: Qrcode,
        navigationOptions: {
            headerTitle: 'Scaner et rouler',
            headerLeft: null
          }
      },
},
);
