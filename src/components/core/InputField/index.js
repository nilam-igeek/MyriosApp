import React from 'react';
import { View, TextInput, Text, Platform } from 'react-native';
import styles from './styles';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';

const Input = ({
    placeholder,
    secureTextEntry,
    maxLength,
    // onEndEditing,
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
    placeholderColor,
    multiline,
    height,
    mt,
    borderRadius,
    numberOfLines,
    bgColor,
    inputColor,
    ref,
    onEndEditing,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
}) => {
    const hasError = errors[name] && touched[name]
    return (
        <>
           {title &&<Text style={[styles.titleText, {
                marginTop: marginTop ? marginTop : 0,
                marginLeft: 22,
                marginBottom: 10,
                width: width ? width : (BaseStyle.WIDTH / 100) * 100,
                color: color ? color : COLORS.black,
            }]}>{title}</Text>}
            <View style={[isBottomLineInput ?  styles.inputCard : styles.inputView, {
                width: width ? width : (BaseStyle.WIDTH / 100) * 100,
                backgroundColor:bgColor?bgColor:isBottomLineInput ? COLORS.transparent : COLORS.lemonchiffon,
                borderBottomWidth: isBottomLineInput ? 1 : 0,
                borderRadius: isBottomLineInput ? 0 :borderRadius ?borderRadius: 50,
                height: height? height : 45,
                marginTop: mt ? mt : 0 

            }]}>
                {isLeft && <>{children}</>}
                <TextInput
                    ref={ref}
                    style={{color:inputColor?inputColor:COLORS.black, height: height? height:45,width: inputWidth ? inputWidth : (BaseStyle.WIDTH / 100) * 100 }}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={(text) => onChange(name)(text)}
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    {...inputProps}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    placeholderTextColor={placeholderColor? placeholderColor : placeholder && COLORS.grey}
                    placeholder={placeholder ? placeholder : ''}
                    returnKeyType={'next'}
                    onEndEditing={onEndEditing}
                />
            </View>
            {hasError && <Text style={[styles.titleText, { 
                marginLeft: isBottomLineInput ? 0 : 22,
                width: width ? width : (BaseStyle.WIDTH / 100) * 100,
                color: COLORS.red,
            }]}>{errors[name]}</Text>}
        </>
    );
};

export default Input;
