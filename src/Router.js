import { StackNavigator } from 'react-navigation';
import * as screens from './screens';
import { colors } from './components/styles';

const Main = StackNavigator(
  {
    Login: { screen: screens.Login },
    Register: { screen: screens.Register },
    Home: { screen: screens.Home },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerMode: 'screen',
      gesturesEnabled: false,
      headerTintColor: colors.primary.text,
      headerStyle: {
        backgroundColor: colors.primary.base,
      },
    },
  },
);

export default Main;
