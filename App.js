import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Keypad from './screens/Keypad';
import Cart from './screens/Cart';



const AppNavigator = createStackNavigator({
  Keypad: {
    screen: Keypad,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Cart: {
    screen: Cart,
    navigationOptions: () => ({
      header: null,
    }),
  } 
});

const App = createAppContainer(AppNavigator);

export default App;
