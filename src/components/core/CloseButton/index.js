


import React from 'react';
import { Pressable, Platform, TouchableOpacity } from 'react-native';
const CloseButton = ({
    onPress,
    children
}) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                width: 60,
                height: 60,
                marginTop: Platform.OS === 'ios' ? 50 : 20,
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <>{children}</>
        </TouchableOpacity>
    );
};

export default CloseButton;
