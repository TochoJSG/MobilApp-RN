import { ActivityIndicator, FlatList, View, Text  } from "react-native";
import React from 'react';
import useFetch from "../../hooks/useFetch";
import { SIZE, Colors } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from './productList.style';

const ProductList = () =>{
    const { data, isLoading, error } = useFetch();

    if(isLoading){
        return(
            <View style={ styles.loadingContainer }>
                <ActivityIndicator 
                    size={ SIZE.xxLarge } 
                    color={ Colors.primary }
                />
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={ data }
                numColumns={2}
                renderItem={({ item })=>{<ProductCardView item={ item } />}}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=><View style={ styles.separator } />}
            />
        </View>
    );
};

export default ProductList;