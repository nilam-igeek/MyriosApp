


import React from 'react';
import { Pressable,Platform } from 'react-native';
const CloseButton = ({
    onPress,
    children
}) => {
    return (
        <Pressable onPress={onPress}
            style={{
                width: 30,
                height: 30,
                position: 'absolute',
                top:Platform.OS === 'ios' ? 50 : 20 ,
                left: 28,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <>{children}</>
        </Pressable>
    );
};

export default CloseButton;
