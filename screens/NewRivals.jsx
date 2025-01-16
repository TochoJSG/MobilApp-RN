import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './newRivals.style';
import { Colors } from '../constants/index';
import ProductList from '../components/products/ProductList';

const NewRivals = ({ navigation }) =>{
    return(
        <SafeAreaView style={ styles.container }>
            <View style={ styles.wrapper }>
                <View style={ styles.upperRow }>
                <TouchableOpacity onPress={ ()=>navigation.goBack() }>
                    <Ionicons
                        name="chevron-back-circle"
                        size={33}
                        color={ Colors.lightWhite }
                    />
                </TouchableOpacity>

                <Text style={ styles.heading }>Products</Text>
                </View>

                <ProductList />

            </View>
        </SafeAreaView>
    );
};

export default NewRivals;