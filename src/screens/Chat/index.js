import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput,Linking } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/core/CloseButton';
const Chat = (props) => {

    const { t } = useTranslation();
    const [isShelterUser, setShelterUser] = useState('isDefault');
    const [name, setName] = useState('');
    const onClick = (type) => {
        setShelterUser(type)
    }

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
                        {isShelterUser === 'NO' && <View style={styles.subContainer}>
                            <Text style={styles.titleText}>{`Let's Chat`}</Text>
                            <Text style={styles.subText}>{`To get started, verify your shelter! Schedule a five minute call with a Myrios team member now!`}</Text>
                            <Button borderRadius={50} title={'Schedule Now'} fontSize={18} color={COLORS.white} height={50} marginTop={35} width={'70%'}
                            onPress={() => {
                                Linking.openURL('https://calendly.com/vatsal-igeek');
                                // props.navigation.navigate('ChooseProfile');
                            }}
                            />
                        </View>}

                        {isShelterUser === 'YES' &&
                            <View style={styles.subContainer}>
                                <Text style={[styles.titleText, { textAlign: "left" }]}>{`Please enter your Shelter's Name..`}</Text>
                                <TextInput
                                    value={name}
                                    onEndEditing={() => onClick('NO')}
                                    style={styles.inputView}
                                    onChangeText={(text) => setName(text)} />
                        </View>}
                    
                    {(isShelterUser === 'isDefault') &&
                            <View style={styles.subContainer}>
                                <Text style={[styles.titleText, { textAlign: "left" }]}>{`Are you currently staying at a shelter?`}</Text>
                                <View style={{ width: '100%', alignSelf: 'center', flexDirection: "row", justifyContent: "space-between" }}>
                                    <Button
                                        title={t('YES')}
                                        fontSize={14}
                                        color={COLORS.white}
                                        height={45}
                                        width={'45%'}
                                        onPress={() => { onClick('YES') }}
                                    />
                                    <Button
                                        title={t('NO')}
                                        fontSize={14}
                                        color={COLORS.white}
                                        height={45}
                                        width={'45%'}
                                        onPress={() => { onClick('NO') }}
                                    />
                                </View>
                            </View>}

                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Chat;
