import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors, } from '../../constants';
import React from 'react';
import styles from './productCardView.style.js';

const ProductCardView = () =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={ ()=> navigation.navigate('ProductDetails') }>
            <View style={ styles.container }>
                <View style={ styles.imageContainer }>
                    <Image 
                        source={{
                            uri:"https://tochamateriasprimas.com/imagenes/productos/6/principal.jpg"
                        }}
                        style={ styles.image } />
                </View>
                <View style={ styles.details }>
                    <Text style={ styles.title } numberOfLines={1} >Danna Reyes</Text>
                    <Text style={ styles.supplier } numberOfLines={1}>Danna Tamara Reyes Cardenas</Text>
                    <Text style={ styles.price } numberOfLines={1} >$23</Text>
                </View>
                <TouchableOpacity style={ styles.addBtn}>
                    <Ionicons name="add-circle" 
                        size={33}
                        color={Colors.primary}
                        />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCardView;