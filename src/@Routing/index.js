/**
 * Create By @name Sukumar_Abhijeet
 */

import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';

// USED SWITFH NAVIGATOR TO SWITCH BETWEEN STACKS AFTER LOGIN TO PROVIDE FUTURE SCALABILITY
const SwitchNav = createSwitchNavigator({
    authStack: {screen:  AuthStack },
},
{
    initialRouteName:'authStack',
},
);

const SwitchNavigator = createAppContainer(SwitchNav);
export default  SwitchNavigator;