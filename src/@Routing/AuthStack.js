/**
 * Create By @name Sukumar_Abhijeet 
 */

import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//SCREEN IMPORTS
import ButtonScreen from '../@Screens/Auth/Buttons';
import LoginScreen from '../@Screens/Auth/Login';
import NativeScreen from '../@Screens/Auth/Native';

const MainAppStack = createStackNavigator(
    {
        Buttons: {
            screen: ButtonScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Login:{
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Native:{
            screen: NativeScreen,
            navigationOptions: {
                headerShown: false,
            }
        }
    },
    {
        initialRouteName: 'Login',
    }
);

const AuthStack = createAppContainer(MainAppStack);
export default AuthStack;

