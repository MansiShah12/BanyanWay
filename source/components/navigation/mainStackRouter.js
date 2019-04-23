import  {createStackNavigator} from 'react-navigation'
import IntroductionScreenContainer from '../introductionScreen/introductionScreenContainer'
export default stackNavigation = createStackNavigator({
    IntroductionScreenContainer : {screen : IntroductionScreenContainer}
 }, navigationOptions ={
    headerMode : 'none'
})
    