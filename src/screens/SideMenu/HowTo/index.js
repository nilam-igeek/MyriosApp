import React, { useState } from 'react';
import { View, Text, StatusBar} from 'react-native';
import styles from './styles';
import '../../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-native-swiper';
const HowTo = (props) => {

    const { t } = useTranslation();

   
return (
        <View style={styles.container}>
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
                {[1, 2, 3].map((item) => {
                    return (
               <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper {item}</Text>
        </View>
           )
       }) }
      </Swiper>  
     </View>
    );
};

export default HowTo;
