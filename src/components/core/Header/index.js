import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from './styles';
import HorizontalDotsSvg from '../../../common/svgs/HorizontalDotsSvg';
const Header = ({
    title,
    onPress
}) => {
    return (
        <View style={styles.headerContainer}>
            <Pressable style={{ width: (BaseStyle.WIDTH / 100) * 10 }} onPress={onPress}>
                <HorizontalDotsSvg width={20} height={20} />
            </Pressable>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

export default Header;