/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { SafeAreaView,Text,ActivityIndicator} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ScreenLoader = ({text = ''}) =>{
    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator color={'#cd2121'} size={'small'} />
            <Text style={{marginTop:moderateScale(10)}}>{text}</Text>
        </SafeAreaView>
    );
};

export default ScreenLoader;