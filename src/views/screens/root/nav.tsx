import { createStackNavigator } from 'react-navigation'
import { LoginScreen } from '../login'
import { MainScreen } from '../main'

export const RootScreenNav = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login'
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Main'
      }
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: { header: null }
  }
)
