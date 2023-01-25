import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';
import { COLORS } from '../../../common/style/Colors';

const Button = ({
    title,
    onPress,
    borderWidth,
    borderColor,
    borderRadius,
    bgColor,
    width,
    height,
    fontSize,
    color,
    isRight
}) => {
    return (
        <>
            <Pressable onPress={onPress}
                style={[styles.btnStyle, {
                    backgroundColor: bgColor ? bgColor : COLORS.cornflowerblue,
                    width: width ? width : 200,
                    height: height ? height : 40,
                    borderWidth: borderWidth ? borderWidth : 0,
                    borderColor: borderColor ? borderColor : COLORS.transparent,
                    borderRadius: borderRadius ? borderRadius : 50,
                    flexDirection: isRight ? 'row' : 'column',
                    justifyContent: isRight ? 'space-around' : 'center'
                }]}>
                <Text style={[styles.textStyle, { color: color ? color : COLORS.black, fontSize: fontSize ? fontSize : 12 }]}>{title}</Text>
                {isRight && <Text style={{ marginLeft: 20 }}>X</Text>}
            </Pressable>
        </>
    );
};

export default Button;
