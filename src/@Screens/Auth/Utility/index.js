//@flow
/**
 * Create By @name Sukumar_Abhijeet
 */

import React,{type AbstractComponent} from 'react';
import { SafeAreaView,View,StatusBar,Text } from 'react-native';
import PropTypes from 'prop-types';
import COLORS from '../../../@Constants/Colors';
import DefaultButton from '../../../@GlobalComponents/Buttons';
import { connect } from 'react-redux';
import styles from './styles';

import {
    mergeTwoObjects,
    mergeTwoArrays,
    concatNumberAndString
} from '../../../@Utils/utility';

const {white}  = COLORS;

type Props = {
    navigation:Object,
    userName:string,
}

const obj1 = {test:'case1',value:50};
const obj2 = {name:'Investec',age:100};

const arr1 = [1,2,3,4,5];
const arr2 = ['N1','N2','N3','N4','N5'];

const param1 = 500;
const param2 = 300;

const UtilityScreen = ({...props} : Props) =>{
    const {navigation:{navigate},userName} = props;

    const stringify = (param) => {
        return JSON.stringify(param);
    };

    const renderObjects = () =>{
        const mergedObjects = mergeTwoObjects(obj1,obj2);
        if(mergedObjects)
            return(
                <>
                    <Text style={styles.text}>Merging The objects</Text>
                    <Text>1st Object : {stringify(obj1)} </Text>
                    <Text>2nd Object : {stringify(obj2)} </Text>
                    <Text>Results : {stringify(mergedObjects)}</Text>
                </>
            );
        return null;
    };
    const renderArrays = () =>{
        const mergerArrays = mergeTwoArrays(arr1,arr2);
        if(mergerArrays)
            return(
                <>
                    <Text style={styles.text}>Merging The Arrays</Text>
                    <Text>1st Array : {stringify(arr1)} </Text>
                    <Text>2nd Array : {stringify(arr2)} </Text>
                    <Text>Results : {stringify(mergerArrays)}</Text>
                </>
            );
        return null;
    };

    const renderConcatStringAndNumber = () =>{
        const mergedStrings = concatNumberAndString(param1,param2);
        if(mergedStrings)
            return(
                <>
                    <Text style={styles.text}>Concatnation Of Strings | Numbers</Text>
                    <Text>1st {typeof param1 } : {param1} </Text>
                    <Text>2nd {typeof param2 } : {param2} </Text>
                    <Text>Results : {mergedStrings}</Text>
                </>
            );
        return null;
    };

    return(
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor={white} barStyle={'dark-content'} />
            {(userName!=='') && <Text style={styles.userName}>Welcome - {userName}</Text>}
            <View style={styles.upperContainer}>
                {renderObjects()}
                {renderArrays()}
                {renderConcatStringAndNumber()}
            </View>
            <View style={styles.buttonWrapper}>
                <DefaultButton buttonText={'Visit Buttons'} onPress={()=>navigate('Buttons')} testId={'NavigateToButtons'} />
                <DefaultButton buttonText={'Check Devices'} onPress={()=>navigate('Native')} testId={'NavigateToNative'} />
                <DefaultButton buttonText={'Check Login'} onPress={()=>navigate('Login')} testId={'NavigateToLogin'} />
            </View>
        </SafeAreaView>
    );
};

UtilityScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

const mapStateToProps =(state : Object) : Object =>{
    return {
        userName: state.userData.userName
    };
};


export default (connect(mapStateToProps)(UtilityScreen):AbstractComponent<any>);