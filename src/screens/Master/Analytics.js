import React from 'react';
import { View, Text, StatusBar, FlatList, ScrollView, Image } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Header from '../../components/core/Header';
import { COLORS } from '../../common/style/Colors';
import CalendarSvg from '../../common/svgs/CalendarSvg';
import Pie from 'react-native-pie'
import { IMAGES } from '../../common/style/Images';
// import MapView from 'react-native-maps';

const Analytics = (props) => {

    const { t } = useTranslation();
    const listOfData = [
        { id: 1, title: 'Download User', count: '43.4k', subTitle: 'From last month' },
        { id: 2, title: 'Donor', count: '10.2k', subTitle: 'From last month' },
        { id: 3, title: 'Refugee', count: '23k', subTitle: 'From last month' },
        { id: 4, title: 'Shelter', count: '10.2k', subTitle: 'From last month' },
    ]
    const pieData = [
        { id: 1, title: 'Refugee', color: '#4B99E0' },
        { id: 2, title: 'Donor', color: '#EC78FF' },
        { id: 3, title: 'Shelter', color: '#8D98FD' }
    ]
    const Item = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText1}>{item.title}</Text>
                <Text style={styles.itemText2}>{item.count}</Text>
                <Text style={styles.itemText3}>{item.subTitle}</Text>
            </View>
        );
    };

   
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={styles.analyticsContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.analyticsText}>{'Analytics'}</Text>
                    <View style={styles.listView}>
                        <FlatList
                            numColumns={2}
                            data={listOfData}
                            extraData={listOfData}
                            keyExtractor={item => item.id}
                            renderItem={Item} />
                    </View>
                    <View style={styles.overView}>
                        <Text style={styles.overViewText}>{'Overview'}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.dateTimeText}>{'Jan - 2023'}</Text>
                            <CalendarSvg />
                        </View>
                    </View>
                    <View style={styles.pieContainer}>
                        <Pie radius={135}
                            sections={[
                                { percentage: 65, color: '#4B99E0' },
                                { percentage: 15, color: '#EC78FF' },
                                { percentage: 20, color: '#8D98FD' },]}
                            strokeCap={'butt'} />

                        <View style={styles.pieSubContainer}>
                            {pieData.map((item) => {
                                return (
                                    <View key={item.id} style={styles.pieCard}>
                                        <View style={[styles.pieBox, { backgroundColor: item.color }]} />
                                        <Text style={styles.pieText}>{item.title}</Text>
                                    </View>
                                )})}
                        </View>
                    </View>
                      <Text style={styles.mostPopularText}>{'Most Popular Screen'}</Text>
                    <View style={styles.popularScreen}>
                    <Image resizeMode='cover' source={IMAGES.screen1} style={styles.popularScreenImg} />
                    </View>
                    <Text style={styles.mostPopularText}>{'Geographic origins of user '}</Text>
                    
                    {/* <MapView style={{width:'70%',alignSelf:'center' }}
                        region={{
                        latitude: 42.882004,
                        longitude: 74.582748,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }} showsUserLocation={true} />  */}
                </ScrollView>
            </View>
        </View>
    );
};

export default Analytics;
