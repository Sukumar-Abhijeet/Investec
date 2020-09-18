/**
 * Create By @name Sukumar_Abhijeet 
 */

import { UPDATE_USER_NAME, } from '../constants/user.constant';

export const updateUserName =(userName='') =>{
    return{
        type: UPDATE_USER_NAME,
        userName,
    };
};