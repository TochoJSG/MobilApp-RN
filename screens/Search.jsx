import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React,{useState} from 'react';
import styles from './search.style';
import { Colors, SIZE } from '../constants';
import axios from 'axios';
import SearchTile from '../components/products/SearchTile';

const Search = () =>{
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    //onPressIn={()=> navigation.navigate('Search') }
    console.log(searchKey);
    //http://localhost:3000/api/products/search/${searchKey}
    const handleSearch = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/products/search/${searchKey}')
            setSearchResults(response.data);
        } catch (error) {
            console.log('Error al consultar ', error);            
        }
    };

    return(
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    {/*<Feather name='search' size={25} style={styles.searchIcon} />*/}
                    <Ionicons name="camera-outline" size={SIZE.xLarge} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchKey}
                        onChangeText={setSearchKey}
                        
                        placeholder='¿Que estas buscando?'
                        />
                </View>

                <View>
                    <TouchableOpacity style={ styles.searchBtn } onPress={()=>handleSearch() }>
                        {/*<Ionicons 
                            style={styles.searchBtn}
                            name='camera-outline' 
                            size={SIZE.xLarge}
                            color={Colors.offwhite}
                        />*/}
                        <Feather name="search" size={23} color={Colors.offwhite}/>
                    </TouchableOpacity>
                </View>
            </View>
            {searchResults.length === 0 ? (
                <View style={{flex:1}}>
                    <Image 
                        source={ require('../assets/images/city1.png') }
                        style={ styles.searchImage }
                    />
                </View>
            ):(
                <FlatList 
                    data={ searchResults }
                    keyExtractor={ (item)=>item._id }
                    renderItem={({item})=>{<SearchTile item={item} />}}
                    style={{marginHorizontal:12}}
                />
            )}
        </SafeAreaView>
    );
};

export default Search;
