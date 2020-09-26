//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React, { useEffect, useState ,type AbstractComponent } from 'react';
import { SafeAreaView,Text,View,NativeModules, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import DefaultButton from '../../../@GlobalComponents/Buttons';
import COLORS from '../../../@Constants/Colors';

const {white} = COLORS;

const {NativeDeviceModule,NativeDevice} = NativeModules;
const NativeDeviceAndroid =NativeDeviceModule;
const NativeDeviceIOS =NativeDevice;

type Props = {
    navigation:Object,
    userName:string,
    updateUserName:Function,
}


const NativeScreen = ({...props} : Props) =>{

    const {userName,navigation:{navigate}} = props;
    const [isNotDevice , setIsNotDevice] = useState(false);

    useEffect(()=>{
        checkDevice();
    },[]);

    // CHECK SIMULATOR/EMULATOR FROM NATIVE MODULES
    const checkDevice = async() =>{
        let isEmulator = false;
        if(Platform.OS === 'ios')
            isEmulator = await NativeDeviceIOS.isEmulator();
        else
            isEmulator = await NativeDeviceAndroid.isEmulator();
        setIsNotDevice(isEmulator);
    };
    
    const showNotice = () =>{
        if(isNotDevice)
            return(
                <View style={styles.noticeView}>
                    <Text style={styles.noticeText}> You are Running on {Platform.OS === 'ios' ? 'Simulator' : 'Emulator'}</Text>
                </View>
            );
        return null;
    };

    return(
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor={white} barStyle={'dark-content'} />
            {
                (userName!=='') && <Text style={styles.userName}>Welcome - {userName}</Text>
            }
            {showNotice()}
            <View style={styles.buttonWrapper}>
                <DefaultButton buttonText={'Visit Buttons'} onPress={()=>navigate('Buttons')} />
                <DefaultButton buttonText={'Check Login'} onPress={()=>navigate('Login')} />
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps =(state : Object) : Object =>{
    return {
        userName: state.userData.userName
    };
};

export default (connect(mapStateToProps)(NativeScreen):AbstractComponent<any>);