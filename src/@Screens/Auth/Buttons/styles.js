/**
 * Create By @name Sukumar_Abhijeet
 */

import {Dimensions, StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#1a1924',
    },
    buttonBox:{
        marginBottom:moderateScale(15),
        paddingVertical:moderateScale(15),
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
    },
    swipeBox:{
        width:'100%',
        alignSelf:'center',
        marginBottom:moderateScale(15),
        backgroundColor:'#1a1924',
        borderRadius:moderateScale(10)
    },
    diamond:{
        width:moderateScale(20),
        height:moderateScale(20)
    },
    thumbIconContainer:{
        borderRadius:moderateScale(8),
    },
    titleStyle:{
        fontSize:moderateScale(12)
    },
    centeredView: {
        
        alignSelf:'center',
        height:moderateScale(200),
        width:Dimensions.get('window').width,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0
      },
      closeButton:{
          backgroundColor:'red',
          margin:moderateScale(10),
          alignSelf:'flex-end',
          padding:moderateScale(15),
          paddingVertical:moderateScale(8),
          borderRadius:moderateScale(5)
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
    viewWrapper:{flexDirection:'row',alignSelf:'center',marginTop:moderateScale(10)}
});

export default styles;