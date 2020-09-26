//@flow

/**
 * Create By @name Sukumar_Abhijeet 
 */

import { UPDATE_USER_NAME, } from '../constants/user.constant';
import type {UpdateUserName} from '../types/userTypes';


export const updateUserName =(userName : string ='') : UpdateUserName =>{
    return{
        type: UPDATE_USER_NAME,
        userName,
    };
};
