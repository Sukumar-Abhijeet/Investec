//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useState,type AbstractComponent } from 'react';
import { SafeAreaView,Text,StatusBar,View,Modal,Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import * as userActions from '../../../@Redux/actions/userActions';
import DefaultButton from '../../../@GlobalComponents/Buttons';
import DefaultSwipeButton from '../../../@GlobalComponents/Buttons/SwipeButton';
import COLORS from '../../../@Constants/Colors'; 

const {primaryText,secondary,darkGrey} = COLORS;
const DiamondImage = () => <Image resizeMode={'cover'} source={require('../../../@Assets/images/diamond.png')} style={styles.diamond} />;

type Props = {
    navigation:Object,
    userName:string,
    updateUserName:Function,
}

const ButtonScreen = ({...props}:Props) =>{

    const {userName,navigation:{navigate},updateUserName} = props;
    const [showModal, setShowModal] = useState(false);

    const terminateSession = () =>{
        setShowModal(false);
        updateUserName();
        Toast.show('Session Terminated');
        navigate('Login');
    };

    const renderModal = () =>{
        return(
            <Modal
                animationType="slide"
                onRequestClose={() => {
                    setShowModal(false);
                }}
                transparent={true}
                visible={showModal}
            >
                <View style={styles.centeredView}>
                    <DefaultButton  buttonStyle={styles.closeButton}  buttonText={'Close'} onPress={()=>setShowModal(false)} />
                    <View style={styles.viewWrapper}>
                        <DefaultButton  buttonStyle={styles.customButtons}  buttonText={'Visit Login'} onPress={()=>{setShowModal(false),navigate('Login');}} />
                        <DefaultButton  buttonStyle={styles.customButtons}  buttonText={'Check Device'} onPress={()=>{setShowModal(false),navigate('Native');}} />
                    </View>
                    <DefaultButton  buttonStyle={styles.terminateButton}  buttonText={'Terminate Session'} onPress={()=>{terminateSession();}} />
                </View>
            </Modal>
        );
    };

    return(
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor={secondary} barStyle={'light-content'} />
            {
                (userName!=='') && <Text style={styles.userName}>Welcome - {userName}</Text>
            }
            <View style={styles.buttonContainer}>
                <DefaultButton buttonStyle={{backgroundColor:secondary}} buttonText={'Press me'} onPress={()=>setShowModal(true)} textStyle={{color:primaryText}} />
                <DefaultButton buttonStyle={{backgroundColor:darkGrey}} buttonText={'Press me'} onPress={()=>setShowModal(true)} textStyle={{color:primaryText}} />
                <DefaultButton buttonText={'Press me'} onPress={()=>setShowModal(true)} />
                <DefaultSwipeButton IconComponent={DiamondImage} onPress={()=>setShowModal(true)} />
            </View>
            {renderModal()}
        </SafeAreaView>
    );
};



const mapStateToProps =(state : Object) : Object =>{
    return {
        userName: state.userData.userName
    };
};

const  mapDispatchToProp : any =(dispatch)=>({
    updateUserName:username =>
        dispatch(userActions.updateUserName(username)),
});

export default (connect(mapStateToProps,mapDispatchToProp)(ButtonScreen):AbstractComponent<any>);