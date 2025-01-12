import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SIZE } from '../../constants/index';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';

const ProductRow = () =>{
    const products = [1,2,3,4,5];
    return(
        <View style={ styles.container }>
        <FlatList
            data={ products }
            renderItem={ ({item}) => <ProductCardView /> }
            horizontal
            contentContainerStyle={{ columnGap:SIZE.medium }}
        />
        </View>
    );
};

export default ProductRow;