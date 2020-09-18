/**
 * Create By @name Sukumar_Abhijeet 
 */

import AsyncStorage from '@react-native-community/async-storage';
import userReducer from './userReducer';
import { persistCombineReducers } from 'redux-persist';

const config = {
    key: 'APPINESS',
    storage:AsyncStorage,
    // blacklist: [
    //     'netInfo',
    // ],
};

const appReducer = persistCombineReducers(config, {
    userData: userReducer,
});

const  rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
