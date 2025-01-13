import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';
import styles from './headings.style.js';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/index'

const Headings = () =>{
    return(
        <View style={ styles.container }>
            <View style={ styles.headerCont }>
                <Text style={ styles.headerTitle }>Tamara</Text>
                <TouchableOpacity>
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