/**
 * Create By @name Sukumar_Abhijeet 
 */

import React,{useState} from 'react';
import { SafeAreaView,Text,StatusBar,View,Image,Modal,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import SwipeButton from 'rn-swipe-button';
import Toast from 'react-native-simple-toast';
import * as userActions from '../../../@Redux/actions/userActions';

const DiamondComponent = () => <Image source={require('../../../@Assets/images/diamond.png')} style={styles.diamond} resizeMode={'cover'} />;

const ButtonScreen = ({...props}) =>{

    const {userName,navigation:{navigate},updateUserName} = props;
    const [showModal, setShowModal] = useState(false);

    const renderButtons =(color='#1a1924',textColor='#6eb1f7')=>(
            <TouchableOpacity onPress={()=>setShowModal(true)} style={{backgroundColor:color,...styles.buttonBox}}>
                <Text style={{color:textColor,...styles.textBox}}>Press me</Text>
            </TouchableOpacity>
        )

    const renderSwipeButton = () => (
    <SwipeButton 
        onSwipeSuccess={() => setShowModal(true)}
        title="Slide me to Continue"
        shouldResetAfterSuccess={true}
        titleColor='#6eb1f7'
        railBackgroundColor={'#1a1924'}
        railBorderColor={'#34424b'}
        railFillBorderColor={'#6eb1f7'}
        railFillBackgroundColor={'#6eb1f7'}
        titleStyles={styles.titleStyle}
        thumbIconBackgroundColor={'#6eb1f7'}
        thumbIconBorderColor={'#6eb1f7'}
        thumbIconStyles={styles.thumbIconContainer}
        thumbIconComponent={DiamondComponent}
        containerStyles={
           styles.swipeBox
        }
    />
    )

    const renderName=()=>{
            if(userName!=='')
            return <Text style={styles.userName}>Welcome - {userName}</Text>;
        return null;
    }

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
                    onBackButtonPress={()=>{setShowModal(false)}}
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                    setShowModal(false)
                    }}
                >
                    <View style={styles.centeredView}>
                        <TouchableOpacity style={styles.closeButton} onPress={()=>{setShowModal(false);}}>
                            <Text style={{color:'#fff'}}>Close</Text>
                        </TouchableOpacity>
                        <View style={styles.viewWrapper}>
                            <TouchableOpacity 
                                onPress={()=>{setShowModal(false),navigate('Login')}}
                                style={styles.customButtons}
                            >
                                <Text style={styles.btnText}>Visit Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{setShowModal(false),navigate('Native')}}
                                style={styles.customButtons}
                            >
                                <Text style={styles.btnText}>Check Device</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            style={{...styles.closeButton,alignSelf:'center'}} 
                            onPress={()=>{terminateSession()}}
                        >
                            <Text style={{color:'#fff'}}>Terminate Session</Text>
                        </TouchableOpacity>
                        
                    </View>
                </Modal>
        )
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
                {renderSwipeButton()}
            </View>
            {renderModal()}
        </SafeAreaView>
    );
};

ButtonScreen.propTypes = {
    userName:PropTypes.string.isRequired,
    navigation:PropTypes.object.isRequired,
    updateUserName:PropTypes.func.isRequired,
};

const mapStateToProps =(state) =>{
    return {
        userName: state.userData.userName
    };
};

const  mapDispatchToProp =(dispatch)=>({
    updateUserName:username =>
        dispatch(userActions.updateUserName(username)),
});

export default connect(mapStateToProps,mapDispatchToProp)(ButtonScreen);