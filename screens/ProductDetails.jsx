import { Text, Image, TouchableOpacity, View } from 'react-native';
import { Ionicons, SimpleLineIcons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useRoute } from '@react-navigation/native';
import styles from './productDetails.style';
import React,{ useState } from 'react';
import { Colors,SIZE } from '../constants';

const ProductDetails = ( { navigation } ) =>{
    const route = useRoute();
    const { item } = route.params;

    const [count, setCount ] = useState(1);
    const increment = () =>{
        setCount(count+1);
    };
    const decrement = () =>{
        if(count>1) setCount(count-1);
    }
    return(
        <View style={ styles.container}>
            <View style={styles.upperRow}>
            <TouchableOpacity onPress={ ()=>navigation.goBack() }>
                <Ionicons
                    name="chevron-back-circle"
                    size={33}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={ ()=>{} }>
                <Ionicons
                    name="heart"
                    size={33}
                    color={ Colors.primary}
                />
            </TouchableOpacity>
            </View>
            <Image 
                source={{
                    uri: item.imageUrl,
                }}
                style={ styles.image }
            />
            <View style={ styles.details }>
                <View style={styles.titleRow}>
                    <Text style={ styles.title }>{ item.title }</Text>
                    <View style={ styles.priceWrapper }>
                        <Text style={ styles.price }>$ { item.price }</Text>
                    </View>
                </View>

                <View style={ styles.ratingRow }>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map( (index)=>(
                        <Ionicons 
                            key={index}
                            name="star"
                            size={25}
                            color="gold"
                        />
                        ))}
                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <View style={styles.rating}>
                        <TouchableOpacity onPress={ ()=> increment() }>
                            <SimpleLineIcons
                                name="plus"
                                size={ 19 }
                            />
                        </TouchableOpacity>

                        <Text style={styles.ratingText}>{ count }</Text>
                        
                        <TouchableOpacity onPress={ ()=>decrement() }>
                            <SimpleLineIcons
                                name="minus"
                                size={ 19 }
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={ styles.descriptionWrapper }>
                    <Text style={ styles.description }>Descripcion
                        </Text>
                    <Text style={ styles.descText }>{ item.description }
                        </Text>
                </View>

                <View style={{ marginBottom:SIZE.small }}>
                    <View style={ styles.location }>
                        <View style={{ flexDirection:'row' }}>
                        <Ionicons 
                            name="location-outline"
                            size={19}
                        />
                        <Text>{ item.product_location }</Text>
                        </View>

                        <View style={{ flexDirection:'row' }}>
                            <MaterialCommunityIcons
                            name="truck-delivery-outline"
                            size={19}
                        />
                        <Text>Free Delivery</Text>
                        </View>
                    </View>
                </View>

                <View style={ styles.cartRow }>
                    <TouchableOpacity 
                        style={ styles.cartBtn }
                        onPress={ ()=>{} }>
                        <Text style={ styles.cartTitle }>Comprar Ahora</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={ styles.addCart }
                        onPress={ ()=>{} }>
                        <Fontisto
                            name="shopping-bag"
                            size={23}
                            color={ Colors.lightWhite }
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default ProductDetails;