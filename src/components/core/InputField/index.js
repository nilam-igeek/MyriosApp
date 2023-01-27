import React, { Children } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';

const Input = ({
    placeholder,
    secureTextEntry,
    maxLength,
    onEndEditing,
    onChangeValue,
    isBottomLineInput,
    width,
    inputWidth,
    title,
    marginTop,
    color,
    children,
    isLeft,
    keyboardType,
    borderWidth,
    borderColor,
    isError,
    ErrorText,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
}) => {
    const hasError = errors[name] && touched[name]
    return (
        <>
           <Text style={[styles.titleText, {
                marginTop: marginTop ? marginTop : 0,
                marginLeft: 22,
                marginBottom: 10,
                width: width ? width : (BaseStyle.WIDTH / 100) * 100,
                color: color ? color : COLORS.black,
            }]}>{title}</Text>
            <View style={[styles.inputView, {
                width: width ? width : (BaseStyle.WIDTH / 100) * 100,
                backgroundColor: isBottomLineInput ? COLORS.transparent : COLORS.lemonchiffon,
                borderBottomWidth: isBottomLineInput ? 1 : 0,
                borderRadius: isBottomLineInput ? 0 : 50,

            }]}>
                {isLeft && <>{children}</>}
                <TextInput
                    style={{ width: inputWidth ? inputWidth : (BaseStyle.WIDTH / 100) * 100 }}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={(text) => onChange(name)(text)}
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    {...inputProps}
                    placeholderTextColor={placeholder && COLORS.lightgray}
                    placeholder={placeholder ? placeholder : ''}
                />
            </View>
            {hasError && <Text style={[styles.titleText, {
                
                marginLeft: 22,
                width: width ? width : (BaseStyle.WIDTH / 100) * 100,
                color: COLORS.red,
            }]}>{errors[name]}</Text>}
        </>
    );
};

export default Input;
