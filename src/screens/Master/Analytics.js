import React from 'react';
import { View, Text,StatusBar } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Header from '../../components/core/Header';
import { COLORS } from '../../common/style/Colors';
const Analytics = (props) => {

const { t } = useTranslation();
    
return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
         <Text style={{textAlign:"center"}}>{'Google Analytics'}</Text>
        </View>
    );
};

export default Analytics;
