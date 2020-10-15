//@flow

/**
 * Create By @name Sukumar_Abhijeet 
 */

import AsyncStorage from '@react-native-community/async-storage';
import userReducer from './userReducer';
import { persistCombineReducers } from 'redux-persist';
import type {UserNameAction,State} from '../types/userTypes';

const config = {
    key: 'INVESTEC',
    storage:AsyncStorage,
};

const AllReducers = {
    userData: userReducer
};

const appReducer = persistCombineReducers(config,AllReducers);

const  rootReducer  = (state : Object, action : UserNameAction) : State => {
    return appReducer(state, action);
};

export default rootReducer;
