//@flow
/**
 * Create By @name Sukumar_Abhijeet 
 */

import React from 'react';
import { StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SwipeButton from 'rn-swipe-button';
import COLORS from '../../@Constants/Colors';

const {secondary,primary,darkGrey} = COLORS;

const DefaultSwipeButton = (
    {onPress,boxContainerStyle,thumbContainerStyle,IconComponent,testId} : 
    {onPress:Function,boxContainerStyle?:Object,thumbContainerStyle?:Object,IconComponent:Function,testId:string}
) : Object =>{
    return(
        <SwipeButton 
            containerStyles={
                {...styles.swipeBox,...boxContainerStyle}
            }
            onSwipeSuccess={onPress}
            railBackgroundColor={secondary}
            railBorderColor={darkGrey}
            railFillBackgroundColor={primary}
            railFillBorderColor={primary}
            shouldResetAfterSuccess={true}
            testID={testId}
            thumbIconBackgroundColor={primary}
            thumbIconBorderColor={primary}
            thumbIconComponent={IconComponent}
            thumbIconStyles={{...styles.thumbIconContainer,...thumbContainerStyle}}
            title="Slide me to Continue"
            titleColor={primary}
            titleStyles={styles.titleStyle}
        />
    );
};

export default DefaultSwipeButton;

const styles : Object = StyleSheet.create({
    swipeBox:{
        width:'100%',
        alignSelf:'center',
        marginBottom:moderateScale(15),
        backgroundColor:'#1a1924',
        borderRadius:moderateScale(10)
    },
    
    thumbIconContainer:{
        borderRadius:moderateScale(8),
    },
    titleStyle:{
        fontSize:moderateScale(12)
    },
});