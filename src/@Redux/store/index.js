//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */


import { createStore } from 'redux'; 
import rootReducer from '../reducers';

const reduxStore : Object  = createStore(
    rootReducer,
);
export default reduxStore;