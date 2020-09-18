/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    userName:{
        color:'#000',
        alignSelf:'flex-end',
        margin:moderateScale(20),
        fontSize:moderateScale(25),
        fontWeight:'bold'
    },
    customButtons:{
        alignSelf:'center',
        backgroundColor:'#0751f0',
        paddingHorizontal:moderateScale(25),
        padding:moderateScale(8),
        borderRadius:moderateScale(4),
        marginBottom:moderateScale(10),
        marginRight:moderateScale(10)
    },
    btnText:{
        color:'#fff'
    },
    buttonWrapper:{
        flexDirection:'row',alignSelf:'center',
        position:'absolute',bottom:moderateScale(50)
    }
});

export default styles;