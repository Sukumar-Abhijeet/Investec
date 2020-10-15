/**
 * Create By @name Sukumar_Abhijeet
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';

const UtilityScreen = () =>{
    return(
        <TouchableOpacity style={{padding:moderateScale(8)}}>
          
        </TouchableOpacity>
    );
};

UtilityScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

export default UtilityScreen;