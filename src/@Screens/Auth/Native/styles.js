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
    userName:{
        color:black,
        alignSelf:'flex-end',
        margin:moderateScale(20),
        fontSize:moderateScale(14),
        fontWeight:'bold'
    },
    buttonWrapper:{
        alignSelf:'center',
        position:'absolute',
        bottom:moderateScale(50),
        width:'100%'
    },
    noticeView:{
        backgroundColor:'#000',
        width:'90%',
        alignSelf:'center',
        borderRadius:moderateScale(5),
        paddingVertical:moderateScale(10),
    },
    noticeText:{
        color:white,
        fontWeight:'bold',
        textAlign:'center'
    }
});

export default styles;