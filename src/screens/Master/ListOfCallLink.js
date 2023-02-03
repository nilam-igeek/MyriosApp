import React from 'react';
import { View, Text, Alert, Modal, Pressable, Linking, FlatList } from 'react-native';
import styles from './styles';
import '../../../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../common/style/Colors';
import CloseSvg from '../../common/svgs/CloseSvg';
const ListOfCallLink = ({ visible, onRequestClose, onClickClose }) => {

    const { t } = useTranslation();
    const Url = "https://us05web.zoom.us/j/83962414337?pwd=YVRxQlB3U3ZKMDZsRFBBTGlNemZWQT09";
    
    const linkList = [
        {
            id: 1,
            url: "https://us05web.zoom.us/j/83962414337?pwd=YVRxQlB3U3ZKMDZsRFBBTGlNemZWQT09"
        },
        {
            id: 2,
            url: "https://us05web.zoom.us/j/83962414337?pwd=YVRxQlB3U3ZKMDZsRFBBTGlNemZWQT09"
        },
        {
            id: 3,
            url: "https://us05web.zoom.us/j/83962414337?pwd=YVRxQlB3U3ZKMDZsRFBBTGlNemZWQT09"
        }
    ]

    return (
        <View style={styles.callModalContainer}>
            <Modal
                visible={visible}
                animationType="fade"
                transparent={true}
                onRequestClose={onRequestClose}>
                <View style={styles.blurView}>
                    <View style={styles.blurSubView}>
                        <Pressable onPress={onClickClose} style={styles.closeBtn}>
                            <CloseSvg fill={COLORS.white} width={10} height={10} />
                        </Pressable>
                        <FlatList
                            data={linkList}
                            extraData={linkList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <View style={styles.listContainer}>
                                    <Text onPress={() => { Linking.openURL(Url) }} style={styles.urlText}>{item.url}</Text>
                                    <Pressable onPress={() => { Alert.alert('Request send') }} style={styles.requestBtn}>
                                        <Text style={styles.requestText}>{'Request'}</Text>
                                    </Pressable>
                                </View>} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ListOfCallLink;
