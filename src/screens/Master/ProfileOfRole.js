import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { IMAGES } from '../../common/style/Images';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import email from 'react-native-email'
import moment from 'moment';
const ProfileOfRole = (props) => {
    const { t } = useTranslation();
    const [response, setResponse] = useState('');
    const data = props.route.params.data;
    const isRole = props.route.params.role;

    const handleEmail = () => {
        // const to = ['nilam.igeek@gmail.com', 'foo@bar.com'] // string or array of email addresses
        email(data.email, {
            // Optional additional arguments
            // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Response',
            body: response,
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }

    const onClick = () => {
        if (isRole === 'contactRequest') {
            props.navigation.navigate('ContactRequests')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={t('myrios')} onPress={onClick} />
            <View style={styles.subProContainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Image resizeMode='contain' style={styles.roleOfProfile} source={{ uri: data.image }} />
                    <Text style={styles.userTitleText}>{`${data.name}`}</Text>
                    <Text style={[styles.commonText, { marginTop: 20 }]}>{t('descAbout')}</Text>
                    <Text style={{ marginTop: 8 }}>
                        <Text style={styles.commonText}>{`Time of request submitted : `}</Text>
                        <Text style={styles.commonSubText}>{moment(data.created_at).format('ll')}</Text>
                    </Text>
                    <Text style={{ marginTop: 8 }}>
                        <Text style={styles.commonText}>{`Date of request submitted : `}</Text>
                        <Text style={styles.commonSubText}>{moment(data.updated_at).format('ll')}</Text>
                    </Text>
                    <Text style={{ marginTop: 8 }}>
                        <Text style={styles.commonText}>{'Email : '}</Text>
                        <Text style={styles.commonSubText}>{data.email}</Text>
                    </Text>
                    <Text style={{ marginTop: 8 }}>
                        <Text style={styles.commonText}>{'Request : '}</Text>
                        <Text style={styles.commonSubText}>{data.message}</Text>
                    </Text>

                    <View style={styles.responseView}>
                        <Text style={styles.responseText}>{t('response')}</Text>
                        <TextInput
                            style={styles.inputView}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => setResponse(text)}
                            value={response} />
                    </View>
                    <Text onPress={handleEmail} style={styles.sendText}>{t('send')}</Text>
                </ScrollView>
            </View>
        </View>
    );
};

export default ProfileOfRole;
