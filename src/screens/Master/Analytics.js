import React from 'react';
import { View, Text,StatusBar,FlatList } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Header from '../../components/core/Header';
import { COLORS } from '../../common/style/Colors';
import { FONTS } from '../../common/style/Fonts';
const Analytics = (props) => {

const { t } = useTranslation();
    const listOfData = [
        {id:1,title:'Download User',user:'43.4k',subTitle:'From last month'},
        { id: 2, title: 'Donor', user: '10.2k', subTitle: 'From last month' },
        { id: 3, title: 'Refugee', user: '23k', subTitle: 'From last month' },
{id:4,title:'Shelter',user:'10.2k',subTitle:'From last month'},
    ]
return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
        <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
        <View style={styles.analyticsContainer}>

            <Text style={styles.analyticsText}>{'Analytics'}</Text>
            <View style={{marginTop:20, flexDirection:'row',width:'100%',alignSelf:'center',justifyContent:'space-between'}}>


                
                    <FlatList
                    numColumns={2}
                    data={listOfData}
                    extraData={listOfData}
                    keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                        
                    <View style={{marginLeft:8,marginTop:10, padding: 10, width: '48%', alignSelf: 'center', borderRadius: 10, backgroundColor: COLORS.cream }}>
                    <Text>{'Download User'}</Text>
                    <Text>{'40.4k'}</Text>
                     <Text>{'From last month'}</Text>
                                </View>
                  
                    } />
           
            </View>
        </View>
        </View>
    );
};

export default Analytics;
