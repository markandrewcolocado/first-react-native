import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreenState from './src/screens/CounterScreenState'
import ColorScreen from './src/screens/ColorScreen'
import SquareScreenState from './src/screens/SquareScreenState'
import SquareScreenReducer from './src/screens/SquareScreenReducer'
import SampleScreenReducer from './src/screens/SampleScreenReducer'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    CounterState: CounterScreenState,
    Color: ColorScreen,
    SquareState: SquareScreenState,
    SquareReducer: SquareScreenReducer,
    SampleReducer: SampleScreenReducer,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Tugas',
    },
  }
)

export default createAppContainer(navigator)
