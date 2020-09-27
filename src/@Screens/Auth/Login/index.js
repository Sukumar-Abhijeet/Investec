//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useState,type AbstractComponent} from 'react';
import { SafeAreaView,View,TextInput,ScrollView, Keyboard, StatusBar } from 'react-native';
import styles from './styles';
import * as userActions from '../../../@Redux/actions/userActions';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import DefaultButton from '../../../@GlobalComponents/Buttons';
import COLORS from '../../../@Constants/Colors';

const {white}  = COLORS;

type Props = {
    navigation:Object,
    updateUserName:Function,
}


const LoginScreen = ({...props}:Props) =>{

    const {
        navigation:{navigate},
        updateUserName
    } = props;

    const [name, setName] = useState('');

    const updateData = () =>{
        Keyboard.dismiss();
        if(name !== '')
        {
            updateUserName(name);
            setName('');
            //Comment The Toast while event testing
            // Toast.show('Your name is updated');
        }
            
        else
            Toast.show('Empty UserName');
    };

    const renderNameBox = () =>(
        <View style={styles.inputWrapper}>
            <TextInput
                autoFocus={true}
                blurOnSubmit={false}
                onChangeText={res => {
                    setName(res);
                }}
                onSubmitEditing={() => updateData()}
                placeholder="Please enter your Name "
                placeholderTextColor={'#6e6d6d'} 
                returnKeyType={'done'}
                style={styles.inputField}
                testID={'TextInput'}
                value={name}
            />
            <DefaultButton buttonStyle={styles.saveButton} buttonText={'Save'} disabled={name===''}  onPress={()=>updateData()} testId={'SaveButton'} title={'Save'} />
        </View>
    );

    return(
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor={white} barStyle={'dark-content'} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    {renderNameBox()}
                </View>
                <DefaultButton buttonText={'Visit Buttons'} onPress={()=>navigate('Buttons')} testId={'NavigateToButtons'} />
                <DefaultButton buttonText={'Check Devices'} onPress={()=>navigate('Native')} testId={'NavigateToNative'} />
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps =() =>{
    return {};
};

const  mapDispatchToProp =(dispatch)=>({
    updateUserName:username =>
        dispatch(userActions.updateUserName(username)),
});


export default (connect(mapStateToProps,mapDispatchToProp)(LoginScreen):AbstractComponent<any>);