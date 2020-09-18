/**
 * Create By @name Sukumar_Abhijeet
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reduxStore from './src/@Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import SwitchNavigator from './src/@Routing';
import ScreenLoader from './src/@GlobalComponents/ScreenLoader';

export const reduxPersistStore = persistStore(reduxStore); 

const App =()=>{

    const renderLoader = () =>{
        return <ScreenLoader />;
    }
    
        return (
            <Provider store={reduxStore}>
                <PersistGate loading={renderLoader()} persistor={reduxPersistStore}>
                    <SwitchNavigator />
                </PersistGate>
            </Provider>
        );
}

export default App;