/**
 * Create By @name Sukumar_Abhijeet 
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView,Text,View,TouchableOpacity,NativeModules, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

const NativeDeviceAndroid = NativeModules.NativeDeviceModule;
const NativeDeviceIOS =NativeModules.NativeDevice;

const NativeScreen = ({...props}) =>{

    const {userName,navigation:{navigate}} = props;

    const [isNotDevice , setIsNotDevice] = useState(false);

    useEffect(()=>{
        checkDevice();
    },[])

    const checkDevice = async() =>{
        let isEmulator = false;
        if(Platform.OS === 'ios')
            isEmulator = await NativeDeviceIOS.isEmulator();
        else
            isEmulator = await NativeDeviceAndroid.isEmulator();
        setIsNotDevice(isEmulator);
    }

    const renderName=()=>{
        if(userName!=='')
            return <Text style={styles.userName}>Welcome - {userName}</Text>;
        return null;
    }

    const showNotice = () =>{
        if(isNotDevice)
            return(
                <View>
                    <Text> You are Running on Emulator</Text>
                </View>
            )
        
        return null;
    }

    return(
        <SafeAreaView style={styles.mainContainer}>
            {renderName()}{showNotice()}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    onPress={()=>navigate('Buttons')}
                    style={styles.customButtons}
                >
                    <Text style={styles.btnText}>Visit Buttons</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigate('Login')}
                    style={styles.customButtons}
                >
                    <Text style={styles.btnText}>Check Login</Text>
                </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
};

NativeScreen.propTypes = {
    userName:PropTypes.string.isRequired,
    navigation:PropTypes.object.isRequired,
};

const mapStateToProps =(state) =>{
    return {
        userName: state.userData.userName
    };
};

export default connect(mapStateToProps)(NativeScreen);