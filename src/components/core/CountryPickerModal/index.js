import React, { useState, useEffect } from 'react';
import { isUndefined } from 'lodash';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import { COLORS } from '../../../common/style/Colors';
const CountryPickerModal = ({ isOnSelect, theme, placeholder,marginTop,isPerson }) => {
    
    const [countryCode, setCountryCode] = useState('FR');
    const [translation, setTranslation] = useState('common');
    const [withCountryNameButton, setWithCountryNameButton] = useState(false);
    const [withFlag, setWithFlag] = useState(true);
    const [withEmoji, setWithEmoji] = useState(true);
    const [withFilter, setWithFilter] = useState(true);
    const [isVisible, setVisible] = useState(false);
    const [withFlagButton, setWithFlagButton] = useState(false);
    const [withAlphaFilter, setWithAlphaFilter] = useState(false);
    const [withCallingCode, setWithCallingCode] = useState(false);
    const [country, setCountry] = useState({
        callingCode: ['1'],
        cca2: 'US',
        currency: ['USD'],
        flag: 'flag-us',
        name: 'United States',
        region: 'Americas',
        subregion: 'North America',
    });

    const onSelect = (country) => {
        if (!isUndefined(country)) {
            setCountryCode(country.cca2);
            setCountry(country);
            setVisible(!isVisible);
            if (isOnSelect) {
                isOnSelect(country?.name);
            }
        }
    };

    useEffect(() => {
        setCountryCode(country.cca2);
        setCountry(country);
        isOnSelect(country?.name);
    }, []);

    const countryName = country ? country?.name : placeholder
    return (
        <TouchableOpacity onPress={() => onSelect(country)}
            style={[isPerson? styles.pickerView :styles.pickerContainer,{marginTop:marginTop? marginTop:0}]}>
            <CountryPicker
                {...{
                    theme,
                    translation,
                    countryCode,
                    withFilter,
                    withFlag,
                    withCountryNameButton,
                    withAlphaFilter,
                    withCallingCode,
                    withEmoji,
                    withFlagButton,
                    onSelect,
                }}
                visible={isVisible}/>
            <Text style={isPerson? styles.textPerson: styles.text}>{countryName}</Text>
        </TouchableOpacity>
    );
};
export default CountryPickerModal;