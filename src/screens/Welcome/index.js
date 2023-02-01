import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
const Welcome = (props) => {

    const { t } = useTranslation();

    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1 }}
            source={{ uri: 'https://images.statusfacebook.com/profile_pictures/kids-dp/kids-dp-101.jpg' }}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.welcomeText}>{'WELCOME TO MYRIOS'}</Text>
                    <Text style={styles.subTitleText}>{'we reccomend visiting our how-to page to show you what Myrios is and how it works!'}</Text>
                    <Button
                        width={'100%'}
                        title={'VISIT'}
                        bgColor={COLORS.white}
                        color={COLORS.black}
                        borderRadius={10}
                        fontSize={16} />
                    <Button
                        width={'100%'}
                        title={'SKIP FOR NOW'}
                        bgColor={COLORS.black}
                        color={COLORS.white}
                        borderRadius={10}
                        marginTop={10}
                        fontSize={16}
                    onPress={() => {props.navigation.navigate('HowTo')}}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default Welcome;
