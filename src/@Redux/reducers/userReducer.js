//@flow

/**
 * Create By @name Sukumar_Abhijeet 
 */

import {
    UPDATE_USER_NAME
} from '../constants/user.constant';

import type {UserNameAction,State} from '../types/userTypes';

const initialState = {
    userName:'',
};


const  userReducer = (state  : State = initialState,action : UserNameAction): State=>{
    const {userName,type} = action;
    switch(type){

    case UPDATE_USER_NAME:
        return{...state,userName:userName};    

    default:
        return state;
    }
};

export default userReducer;