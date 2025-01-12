import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './welcome.style';
import { Colors, SIZE } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Welcome = () =>{
    const navigation = useNavigation();
    
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText(Colors.black, SIZE.xSmall)}>
                    {" "}
                    Find the Most
                </Text>

                <Text style={styles.welcomeText(Colors.primary, 0)}>
                    {" "}
                    Danna 
                </Text>
            </View>

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
                            color={Colors.gray2}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Welcome;