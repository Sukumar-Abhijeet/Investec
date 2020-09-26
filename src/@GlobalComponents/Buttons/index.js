//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { Pressable,Text,StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import COLORS from '../../@Constants/Colors';

const {primary,white} =COLORS;


const DefaultButton = (
    {buttonStyle,disabled,buttonText,textStyle,onPress}:
    {buttonStyle?:Object,disabled?:boolean,buttonText:string,textStyle?:Object,onPress:Function}
) : Object => {
    return(
        <Pressable disabled={disabled} onPress={onPress} style={{opacity:disabled ? .4:1,...styles.defaultStyle,...buttonStyle}}>
            <Text style={{...styles.defaultTextStyle,...textStyle}}>{buttonText}</Text>
        </Pressable>
    );
};

export default DefaultButton;

const styles : Object = StyleSheet.create({
    defaultStyle:{
        backgroundColor:primary,
        marginBottom:moderateScale(10),
        borderRadius:moderateScale(10),
        paddingVertical:moderateScale(15),
        width:'100%',
        
    },
    defaultTextStyle:{
        color:white,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:moderateScale(14)
    }
});