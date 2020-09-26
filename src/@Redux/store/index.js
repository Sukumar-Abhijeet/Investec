//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */


import { createStore } from 'redux'; 
import rootReducer from '../reducers';

const reduxStore : any  = createStore(
    rootReducer,
);
export default reduxStore;