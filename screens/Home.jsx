import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './home.style';

const Home = () =>{
    return(
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={23}/>
                    <Text>Iztapalapa, CDMX</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
