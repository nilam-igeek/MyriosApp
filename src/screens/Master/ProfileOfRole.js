import React, { useState} from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { IMAGES } from '../../common/style/Images';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import email from 'react-native-email'
const ProfileOfRole = (props) => {
    const { t } = useTranslation();
    const [response, setResponse] = useState('')
    const [userEmail, setuserEmail] = useState(`nilam.igeek@gmail.com`)

 handleEmail = () => {
        // const to = ['nilam.igeek@gmail.com', 'foo@bar.com'] // string or array of email addresses
        email(userEmail, {
            // Optional additional arguments
            // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Response',
            body: response,
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={styles.subProContainer}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                <Image resizeMode='contain' style={styles.roleOfProfile} source={IMAGES.donor1} />
                <Text style={styles.userTitleText}>{`John, France`}</Text>
                <Text style={[styles.commonText, { marginTop: 20 }]}>{`DESC/ ABOUT`}</Text>
                <Text style={styles.commonText}>{`Time of request submitted`}</Text>
                <Text style={styles.commonText}>{`Date of request submitted`}</Text>
                <Text style={styles.commonText}>{`Email: ${userEmail}`}</Text>
                <Text style={styles.commonText}>{`Request:`}</Text>
                <View style={styles.responseView}>
                    <Text style={styles.responseText}>{`RESPONSE`}</Text>
                    <TextInput
                        style={styles.inputView}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => setResponse(text)}
                        value={response} />
                </View>
                    <Text onPress={handleEmail} style={styles.sendText}>{`SEND`}</Text>
                    </ScrollView>
            </View>
        </View>
    );
};

export default ProfileOfRole;
