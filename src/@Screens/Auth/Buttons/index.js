/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useEffect} from 'react';
import { SafeAreaView,Text,StatusBar,View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const ButtonScreen = ({...props}) =>{

    const {userName,navigation:{navigate}} = props;

    const renderButtons =(color='#1a1924',textColor='#6eb1f7')=>{
        return(
            <TouchableOpacity style={{backgroundColor:color,...styles.buttonBox}}>
                <Text style={{color:textColor,...styles.textBox}}>Press me</Text>
            </TouchableOpacity>
        )
    }

    const renderName=()=>{
            if(userName!=='')
            return <Text style={styles.userName}>Welcome - {userName}</Text>;
        return null;
    }

    return(
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle={'light-content'} />
            {
                renderName()
            }
            <View style={styles.buttonContainer}>
                {renderButtons()}
                {renderButtons('#34424b')}
                {renderButtons('#6eb1f7','#fff')}
            </View>
        </SafeAreaView>
    );
};

ButtonScreen.propTypes = {
    userName:PropTypes.string.isRequired,
    navigation:PropTypes.object.isRequired,
};

const mapStateToProps =(state) =>{
    return {
        userName: state.userData.userName
    };
};

export default connect(mapStateToProps)(ButtonScreen);