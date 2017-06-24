import { StackNavigator } from 'react-navigation';
import * as screens from './screens';

const Main = StackNavigator(
  {
    Login: { screen: screens.Login },
    Register: { screen: screens.Register },
    Home: { screen: screens.Home },
  },
  {
    initialRouteName: 'Login',
  },
);

export default Main;
