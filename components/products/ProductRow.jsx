import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Colors, SIZE } from '../../constants/index';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';
import useFetch from '../../hooks/useFetch';

const ProductRow = () =>{
    const { data, isLoading, error } = useFetch();
    const products = [1,2,3,4,5];
    return(
        <View style={ styles.container }>
            { isLoading ? (
                <ActivityIndicator />
            ):error ? (
                <Text>Algo Fallo</Text>
            ):(
            <FlatList
                data={ data }
                keyExtractor={ (item)=>item._id }
                renderItem={ ({item}) => <ProductCardView item={item} /> }
                horizontal
                contentContainerStyle={{ columnGap:SIZE.medium }}
            />
            )}
        </View>
    );
};

export default ProductRow;