import {createSwitchNavigator,createAppContainer} from "react-navigation"
import WaveSelect from "./src/screens/waveSelectScreen";
import Dependency from "./src/screens/dependencyEnterScreen"
import OTP from "./src/screens/otpScreen";


const MainSwitchNav = createSwitchNavigator({
  Wave: WaveSelect,
  Dependency:Dependency,
  OTP:OTP
},{
  initialRouteName:"Wave",
  defaultNavigationOptions:{
    title:"Waves"
  }
});


export default createAppContainer(MainSwitchNav);

