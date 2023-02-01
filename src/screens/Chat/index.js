import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { COLORS } from '../../common/style/Colors';
import Button from '../../components/core/Button';
import styles from './styles';
import CloseSvg from '../../common/svgs/CloseSvg';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Formik, Field } from 'formik';
import Input from '../../components/core/InputField';
import * as yup from 'yup';
import CloseButton from '../../components/core/CloseButton';
const Chat = (props) => {

    const { t } = useTranslation();
    const [isShelterUser, setShelterUser] = useState('isDefault');
    const onClick = (type) => {
        setShelterUser(type)
    }



    const loginValidationSchema = yup.object().shape({
        firstName: yup
            .string()
        // .required(t('Firstname is Required'))
    })

    const onClickSubmit = async values => {
        const { firstName } = values;
        var body = {
            firstName: firstName,
        };

    };


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
                                onPress={() => {onClick('YES') }}
                            />
                        </View>}

                        {isShelterUser === 'YES' &&
                            <View style={styles.subContainer}>
                                <Text style={[styles.titleText, { textAlign: "left" }]}>{`Please enter your Shelter's Name..`}</Text>
                                <Formik
                                    validationSchema={loginValidationSchema}
                                    initialValues={{ firstName: '' }}
                                    onSubmit={onClickSubmit}>
                                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
                                        <Field
                                            name={'firstName'}
                                            component={Input}
                                            value={values.firstName}
                                            onChangeText={handleChange('firstName')}
                                            onBlur={handleBlur('firstName')}
                                            width={(BaseStyle.WIDTH / 100) * 70}
                                            inputWidth={(BaseStyle.WIDTH / 100) * 60}
                                            bgColor={COLORS.cornflowerblue}
                                            isError={errors.firstName}
                                            inputColor={COLORS.white}
                                        />
                                    )}
                                </Formik>
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
