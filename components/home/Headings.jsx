import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';
import styles from './headings.style.js';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/index'
import { useNavigation } from '@react-navigation/native'; 

const Headings = () =>{
    const navigation = useNavigation();
    return(
        <View style={ styles.container }>
            <View style={ styles.headerCont }>
                <Text style={ styles.headerTitle }>Lo mas Hot</Text>
                <TouchableOpacity onPress={ ()=>navigation.navigate('ProductList') }>
                    <Ionicons 
                        name='grid'
                        size={25}
                        color={ Colors.primary } />  
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Headings;