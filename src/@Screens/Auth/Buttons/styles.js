//@flow
/**
 * Create By @name Sukumar_Abhijeet
 */

import {Dimensions, StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import COLORS from '../../../@Constants/Colors';
const {secondary,white} = COLORS;


const styles : Object = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:secondary,
    },
    buttonBox:{
        marginBottom:moderateScale(15),
        paddingVertical:moderateScale(15),
        borderRadius:moderateScale(10)
    },
    buttonContainer:{
        position:'absolute',
        bottom:0,width:'90%',
        alignSelf:'center',
    },
    userName:{
        color:'#fff',
        alignSelf:'flex-end',
        margin:moderateScale(20),
        fontSize:moderateScale(14),
        fontWeight:'bold'
    },
    textBox:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:moderateScale(14)
    },

    centeredView: {
        alignSelf:'center',
        height:moderateScale(200),
        width:Dimensions.get('window').width,
        backgroundColor:white,
        position:'absolute',
        bottom:0
    },

    closeButton:{
        backgroundColor:'red',
        margin:moderateScale(10),
        alignSelf:'flex-end',
        width:moderateScale(100),
        padding:moderateScale(15),
        paddingVertical:moderateScale(8),
    },
    terminateButton:{
        backgroundColor:'red',
        margin:moderateScale(10),
        alignSelf:'center',
        width:moderateScale(150),
        padding:moderateScale(15),
        paddingVertical:moderateScale(8),
    },
    customButtons:{
        width:moderateScale(100),
        paddingVertical:moderateScale(10)
    },
    btnText:{
        color:white
    },
    viewWrapper:{
        flexDirection:'row',marginTop:moderateScale(10),
        justifyContent:'space-between',alignItems:'center',
        paddingHorizontal:moderateScale(10)
    },
    diamond:{
        width:moderateScale(20),
        height:moderateScale(20)
    },
});

export default styles;