//@flow

/**
 * Create By @name Sukumar_Abhijeet 
 */

import AsyncStorage from '@react-native-community/async-storage';
import userReducer from './userReducer';
import { persistCombineReducers } from 'redux-persist';
import type {Reducer} from 'redux';
import type {UserNameAction,State} from '../types/userTypes';

const config = {
    key: 'APPINESS',
    storage:AsyncStorage,
    // blacklist: [
    //     'netInfo',
    // ],
};

type RootReducer = Reducer<State,UserNameAction>

const AllReducers = {
    userData: userReducer
};

const appReducer = persistCombineReducers(config,AllReducers);

const  rootReducer : RootReducer = (state : Object, action : UserNameAction) => {
    return appReducer(state, action);
};

export default rootReducer;
