import { createStackNavigator } from 'react-navigation'
import { HomeScreen } from '../home'

export const MainScreenNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)
