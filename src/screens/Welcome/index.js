import React from 'react';
import { ImageBackground } from 'react-native';

import '../../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
const Welcome = (props) => {

const {t} = useTranslation();
   
return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
           
        
        </ImageBackground>
    );
};

export default Welcome;
