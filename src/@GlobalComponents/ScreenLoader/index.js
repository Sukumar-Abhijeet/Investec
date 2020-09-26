//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { SafeAreaView,Text,ActivityIndicator,StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import COLORS from '../../@Constants/Colors';

const {red} = COLORS;
 
const ScreenLoader = ({text = ''}:{text?:string}) : Object =>{
    return(
        <SafeAreaView style={styles.container}>
            <ActivityIndicator color={red} size={'small'} />
            <Text style={{marginTop:moderateScale(10)}}>{text}</Text>
        </SafeAreaView>
    );
};

export default ScreenLoader;

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'}
});