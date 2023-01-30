import React from 'react';
import { View, Text, ImageBackground, ScrollView,Pressable } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
const Chat = (props) => {

const {t} = useTranslation();
   
return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
           <CloseButton onPress={() => props.navigation.goBack()}>
                <CloseSvg fill={COLORS.white} />
            </CloseButton>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={styles.subContainer}>
                            <Text style={styles.titleText}>{`Let's Chat`}</Text>
                       <Text style={styles.subText}>{`To get started, verify your shelter! Schedule a five minute call with a Myrios team member now!`}</Text>
                        <Button borderRadius={50} title={'Schedule Now'} fontSize={18} color={COLORS.white} height={50} marginTop={35} width={'70%'}
                        onPress={() => { props.navigation.navigate('Login') }}
                        />
                        </View> 
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Chat;
