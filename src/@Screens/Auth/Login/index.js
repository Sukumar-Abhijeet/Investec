/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useState,useRef} from 'react';
import { SafeAreaView,View,TextInput,Text,TouchableOpacity,ScrollView, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import * as userActions from '../../../@Redux/actions/userActions';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

const LoginScreen = ({...props}) =>{

    const myName = useRef();

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
                myName.current.clear();
                setName('');
                Toast.show('Your name is updated');
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
                ref={myName}
                onSubmitEditing={() => updateData()}
                placeholder="Please enter your Name " 
                placeholderTextColor={'#6e6d6d'}
                returnKeyType={'done'}
                style={styles.inputField}
            />
            <TouchableOpacity 
                onPress={()=>updateData()} 
                disabled={name===''} 
                style={{...styles.saveButton,opacity:name === '' ? .4:1}}
            >
                <Text style={{color:'#fff'}}>Save</Text>
            </TouchableOpacity>
            </View>
        );

    return(
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    {renderNameBox()}
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                    onPress={()=>navigate('Buttons')}
                    style={styles.customButtons}
                >
                    <Text style={styles.btnText}>Visit Buttons</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigate('Native')}
                    style={styles.customButtons}
                >
                    <Text style={styles.btnText}>Check Device</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

LoginScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
    updateUserName:PropTypes.func.isRequired,
};

const mapStateToProps =() =>{
    return {};
};

const  mapDispatchToProp =(dispatch)=>({
    updateUserName:username =>
        dispatch(userActions.updateUserName(username)),
});


export default connect(mapStateToProps,mapDispatchToProp)(LoginScreen);