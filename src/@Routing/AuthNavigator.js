//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//SCREEN IMPORTS
import ButtonScreen from '../@Screens/Auth/Buttons';
import LoginScreen from '../@Screens/Auth/Login';
import NativeScreen from '../@Screens/Auth/Native';
import UtilityScreen from '../@Screens/Auth/Utility';

const Stack = createStackNavigator();
const navigationOptions = {headerShown: false};

const AuthNavigator = () : Function => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName={'Buttons'}>
                <Stack.Screen
                    component={ButtonScreen}
                    name="Buttons"
                    options={navigationOptions}
                />
                <Stack.Screen
                    component={LoginScreen}
                    name="Login"
                    options={navigationOptions}
                />
                <Stack.Screen
                    component={NativeScreen}
                    name="Native"
                    options={navigationOptions}
                />
                <Stack.Screen
                    component={UtilityScreen}
                    name="Utility"
                    options={navigationOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigator;

