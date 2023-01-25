import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import RightArrowSvg from '../../common/svgs/RightArrowSvg';
import Button from '../../components/core/Button';
import styles from './styles';

const Language = (props) => {
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1}}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
        <View style={{flex:1,justifyContent:'flex-end'}}>
                <View style={{backgroundColor:"white",height:'65%',width:'90%',borderTopRightRadius:30}}>
                    <Text style={{marginTop:10, fontSize:20,color:COLORS.black,marginLeft:30}}>Choose your language!</Text>
                </View>
        </View>
        </ImageBackground>
    );
};

export default Language;
