import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import RightArrowSvg from '../../common/svgs/RightArrowSvg';
import Button from '../../components/core/Button';
import styles from './styles';

const index = (props) => {
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <View style={{flex:1,backgroundColor:'white'}}>
                
         </View>
        </ImageBackground>
    );
};

export default index;
