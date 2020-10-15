//@flow

/**
 * Create By @name Sukumar_Abhijeet
 */

import React,{type StatelessFunctionalComponent}  from 'react';
import { Provider } from 'react-redux';
import reduxStore from './src/@Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import AuthNavigator from './src/@Routing';
import ScreenLoader from './src/@GlobalComponents/ScreenLoader';

export const reduxPersistStore : Object = persistStore(reduxStore); 

const App : StatelessFunctionalComponent<Node> = () => {
    
    const renderLoader = () =>{
        return <ScreenLoader />;
    };
    
    return (
        <Provider store={reduxStore}>
            <PersistGate loading={renderLoader()} persistor={reduxPersistStore}>
                <AuthNavigator />
            </PersistGate>
        </Provider>
    );
};

export default App;