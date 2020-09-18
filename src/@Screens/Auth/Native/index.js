/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { SafeAreaView,Text,View,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

const NativeScreen = ({...props}) =>{

    const {userName,navigation:{navigate}} = props;

    const renderName=()=>{
        if(userName!=='')
        return <Text style={styles.userName}>Welcome - {userName}</Text>;
    return null;
}

    return(
        <SafeAreaView style={styles.mainContainer}>
            {
                renderName()
            }
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