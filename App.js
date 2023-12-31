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
import CounterScreenReducer from './src/screens/CounterScreenReducer'
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'
import BoxExerciseScreen from './src/screens/BoxExerciseScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    CounterState: CounterScreenState,
    CounterReducer: CounterScreenReducer,
    Color: ColorScreen,
    SquareState: SquareScreenState,
    SquareReducer: SquareScreenReducer,
    SampleReducer: SampleScreenReducer,
    Text: TextScreen,
    Box: BoxScreen,
    BoxExercise: BoxExerciseScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Tugas',
    },
  }
)

export default createAppContainer(navigator)
