import { createStackNavigator } from 'react-navigation-stack';
import Compte from "../screens/Compte"
export default createStackNavigator({
  Compte: {
      screen: Compte,
      navigationOptions: {
          headerTitle: 'Mon Compte',
          headerLeft: null
        }
    },
},
);
