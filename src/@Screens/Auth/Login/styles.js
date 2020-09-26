//@flow
/**
 * Create By @name Sukumar_Abhijeet
 */

import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles:Object = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    scrollContainer:{
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        padding:moderateScale(10)
    },
    card:{
        width:'90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        backgroundColor:'#f0f0f0',
        marginVertical:moderateScale(20),
        borderRadius:moderateScale(4),
        padding:moderateScale(15),
    },
    inputField:{
        borderBottomColor:'#cfcfcf',
        borderBottomWidth:1,
        height:moderateScale(45),
        width:'80%'
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
    inputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    saveButton:{
        width:moderateScale(50),
        paddingVertical:moderateScale(10)
    }
});

export default styles;