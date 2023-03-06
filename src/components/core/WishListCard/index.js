import { Text, Pressable, View, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
const WishListCard = ({
    source,
    name,
    gender,
    age,
    country,
    onClick,
    onPress,
    children
}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={styles.GridViewBlockStyle}>
                <ImageBackground
                    // resizeMode='cover'
                    source={source}
                    resizeMode={'contain'}
                    style={styles.profilePic}
                    imageStyle={{ borderRadius: 15 }}>
                    <Pressable
                        onPress={onClick}
                        style={styles.favBtn}>
                        <>{children}</>
                    </Pressable>
                </ImageBackground>
            </Pressable>
            <View style={styles.textContainer}>
                <Text style={styles.firstTitle}>{`${name}, ${gender}`}</Text>
                <Text style={styles.secondTitle}>{`${age}years, ${country}`}</Text>
            </View>
        </View>
    );
};

export default WishListCard;