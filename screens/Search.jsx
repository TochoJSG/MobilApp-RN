import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import styles from './search.style';
import { Colors, SIZE } from '../constants';

const Search = () =>{
    return(
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name='search' size={25} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={()=> navigation.navigate('Search') }
                        placeholder='¿Que estas buscando?'
                        />
                </View>

                <View>
                    <TouchableOpacity>
                        <Ionicons 
                            style={styles.searchBtn}
                            name='camera-outline' 
                            size={SIZE.xLarge}
                            color={Colors.offwhite}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Search;
