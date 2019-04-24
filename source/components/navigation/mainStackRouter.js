import  {createStackNavigator} from 'react-navigation'
import IntroductionScreenContainer from '../IntroductionScreen/IntroductionScreenContainer'
export default stackNavigation = createStackNavigator({
    IntroductionScreenContainer : {screen : IntroductionScreenContainer}
 }, navigationOptions ={
    headerMode : 'none'
})
    