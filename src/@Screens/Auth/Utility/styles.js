//@flow
/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import COLORS from '../../../@Constants/Colors';

const {black,white}  = COLORS;

const styles : Object = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding:moderateScale(10),
        backgroundColor:white
    },
    buttonWrapper:{
        alignSelf:'center',
        position:'absolute',
        bottom:moderateScale(50),
        width:'90%',
    },
    upperContainer:{
        paddingHorizontal:moderateScale(20)
    },
    userName:{
        color:black,
        alignSelf:'flex-end',
        margin:moderateScale(20),
        fontSize:moderateScale(14),
        fontWeight:'bold'
    },
    text:{
        marginTop:moderateScale(10),
        fontSize:moderateScale(16)
    }
});

export default styles;