import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import EmailSvg from '../../../common/svgs/EmailSvg';
const Input = ({
    isLeft,
    isRight,
    placeholder,
    secureTextEntry,
    value,
    maxLength,
    onEndEditing,
    onChangeValue,
    isBottomLineInput
}) => {
    return (
        <>
            <View style={[styles.inputView, {
                backgroundColor: isBottomLineInput ? COLORS.transparent : COLORS.yellow,
                borderBottomWidth: isBottomLineInput ? 1 : 0,
                borderRadius: isBottomLineInput ? 0 : 50,
            }]}>
                <View style={styles.leftIconStyle}>
                    {isLeft && <EmailSvg />}
                </View>
                <TextInput
                    style={{ width: !isLeft ? (BaseStyle.WIDTH / 100) * 75 : (BaseStyle.WIDTH / 100) * 70, }}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={onChangeValue}
                    onEndEditing={onEndEditing}
                    maxLength={maxLength}
                    placeholderTextColor={placeholder && COLORS.lightgray}
                    placeholder={placeholder ? placeholder : ''}
                />
                <View style={styles.rightIconStyle}>
                    {isRight && <></>}
                </View>
            </View>
        </>
    );
};

export default Input;
