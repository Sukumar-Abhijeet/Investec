/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#1a1924',
    },
    buttonBox:{
        marginBottom:moderateScale(15),
        paddingVertical:moderateScale(20),
        borderRadius:moderateScale(10)
    },
    buttonContainer:{
       position:'absolute',
       bottom:0,width:'90%',
       alignSelf:'center'
    },
    userName:{
        color:'#fff',
        alignSelf:'flex-end',
        margin:moderateScale(20),
        fontSize:moderateScale(25),
        fontWeight:'bold'
    },
    textBox:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:moderateScale(14)
    }
});

export default styles;