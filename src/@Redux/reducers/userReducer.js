/**
 * Create By @name Sukumar_Abhijeet 
 */

import {
    UPDATE_USER_NAME
} from '../constants/user.constant';


const initialState = {
    userName:'',
};

const  userReducer = (state = initialState,action) =>{
    const {userName,type} = action;
    switch(type){

    case UPDATE_USER_NAME:
        return{...state,userName:userName};    

    default:
        return state;
    }
};

export default userReducer;