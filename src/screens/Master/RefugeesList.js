import React,{useEffect} from 'react';
import { View, Text, StatusBar, Image, FlatList, Pressable } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import Header from '../../components/core/Header';
import { refugeeList } from './ArrayList';
import axios from 'axios';
import {refugeesListApi} from '../../redux/actions/ApiActionCreator';
import {useDispatch, useSelector} from 'react-redux';
const RefugeesList = (props) => {
   
const { t } = useTranslation();
 const dispatch = useDispatch();
    // const data = useSelector((state) => state.apiReducer.data);
    // const success = useSelector((state) => state.apiReducer.data.success);
    // const loading = useSelector((state) => state.apiReducer.loading);
    
    // useEffect(() => {
    //     dispatch(refugeesListApi());
    //   }, []);
    
//     React.useEffect(() => {
 
//     axios
//         .get("http://9b31-2405-201-2014-3157-a1ff-4b9a-4f17-3151.ngrok.io/api/refugees", {
//           headers: {'Authorization': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTg0NjFjMWU5NDc4MGQzYmE5ZTEwY2ZlYTg0YzE4MjdjOGE2YmE1NDI3NjNhZGY0Mjk0YWFlZmIxZWZjZDVhNTUwNzE4NmFkNGFkNGNkN2IiLCJpYXQiOjE2NzU3Njk4MzAuMDIwNDkzLCJuYmYiOjE2NzU3Njk4MzAuMDIwNDk2LCJleHAiOjE3MDczMDU4MzAuMDE4NDk5LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.5txU7tLhu5I65mRBpDp3ftvOiM0Gy1TcQMe64VE36d4Bm-K7E03GbiwZKZv7ereR973kl26_xz1P7L6bUXCtraluX51onsRBdtSjJq3e-9UsmGf3QYaUAxNqhRI2cc8V-wjqdS1xfso44sksRtJadzrSSlno2-JETXtYtGcfqfVSmYRAu10NFojSao922EPTBf_EzC2eQAeNXGijXURaqkuVQT-4iyYZEOhSIuUVD_uaoOqowgv5PXTCh-XGLPmjWEb0NGiYqXBEgMfI7lOL6QL94k5Kv5DqwYL6YBSo_Ed_2Ej2xF7YxJqzgS6V43dUWf411tLb8FHxbUyl4FT722WzmmutyINfBhjfTqISoe11ctIS1ctgqPLT23NW-BqQ08aIOkbAre_o0VsE3DLo1UfYVu1JeISfQTzAOJ7yn6aocveT24q3WimpBPiUC2R_2oOlVpuGf8jKyPcCTgHSkxxpY9EjH-sSRAvqdtN5LRybQXZy1ig-cgyZuOKqZ3_Lg0CWkoqN3gn8yP2mCW1mY9L6xKYsdo1rImmqzQq5kvY_JUUsaOe8PyHrJrO5MZwaFvyQZcE9mTivq_ngQXX61KXYGN9P2IYEytcuKmyR-DtNyiF__P25yzUwurbYBqVKq_kyKBbGskECEpK0ie4Cr44VYJ6CnrYJxzw8nrayUx8'}`}
//       })
//       .then((response) => {
//       console.log("re---->",response);
//       })
//       .catch((error) => {
      
//         console.log(error);
//       });


//   }, []);
    
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.seashell} />
            <Header title={'Myrios'} onPress={() => { props.navigation.toggleDrawer() }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={styles.titleText}>{`${'MASTER LIST OF\n'} ${'REFUGEES'}`}</Text>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={refugeeList}
                        extraData={refugeeList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable style={[styles.itemCard, {}]} onPress={() => {props.navigation.navigate('ProfileOfRole')}}>
                                <Image
                                    resizeMode='cover'
                                    source={item.profile}
                                    style={styles.profileStyle} />
                                <Text style={{ marginLeft: 20 }} >
                                    <Text style={styles.userName}>{item.name}</Text>
                                    {item.country && <Text style={styles.userName}>{', '}{item.country}</Text>}
                                    {item.type && <Text style={styles.userName}>{', '}{item.type}</Text>}
                                    {item.age && <Text style={styles.userName}>{', '}{item.age}</Text>}
                                </Text>
                            </Pressable>} />
                </View>
            </View>
        </View>
    );
};

export default RefugeesList;
