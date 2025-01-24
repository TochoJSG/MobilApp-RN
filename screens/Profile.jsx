import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './profile.style';
import { StatusBar } from 'expo-status-bar'; 
import { Ionicons, Feather, AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '../constants/index';

const Profile = ({navigation}) =>{
    const [userData, setUserData] = useState(null);
    const [userLogin, setUserLogin] = useState(false);

    const logout = ()=>{
        Alert.alert(
            "LogOut",
            "Estas a punto de desconectarte, ¿continuas?",
            [
                {
                    text:"cancelar", onPress:()=>console.log('cancelado el deslogeo')
                },
                {
                    test:"continuar", onPress:()=>console.log('usuario deslogeado')
                },
                {defaultIndex:1},
            ]
        )
    };

    const clearCache = ()=>{
        Alert.alert(
            "Limpiar Cache",
            "Estas a punto de eliminar datos de tu navegacion",
            [
                {
                    text:"cancelar", onPress:()=>console.log('cancelado clearCache')
                },
                {
                    test:"continuar", onPress:()=>console.log('clearCache')
                },
                {defaultIndex:1},
            ]
        )
    };

    const deleteAccount = ()=>{
        Alert.alert(
            "LogOut",
            "Estas a punto de ELIMINAR tu Cuenta, ¿continuas?",
            [
                {
                    text:"cancelar", onPress:()=>console.log('eliminacion cancelada')
                },
                {
                    test:"continuar", onPress:()=>console.log('usuario eliminado, enviar mail')
                },
                {defaultIndex:1},
            ]
        )
    };
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.gray}    />

                <View style={{width:"100%"}}>
                    <Image
                        source={require('../assets/local.jpg')}
                        style={styles.cover}
                    />
                </View>
                <View style={styles.profileCont}>
                    <Image
                        source={require('../assets/users.png')}
                        style={styles.profile}
                    /> 
                    <Text style={styles.name}>
                        {userLogin === true ? userData.name : 'Necesitas Logearte' }
                    </Text>
                    {
                        userLogin === false ? (
                            <TouchableOpacity onPress={ ()=>navigation.navigate('Login') }>
                                <View style={ styles.loginBtn }>
                                    <Text style={styles.menuText}>L O G I N   </Text>
                                </View>
                            </TouchableOpacity>
                        ):(
                            <View style={ styles.loginBtn }>
                                <Text style={styles.menuText}>danna@mail.com</Text>
                            </View>
                        )
                    }

                    {
                        userLogin === true ? (
                            <View></View>
                        ):(
                            <View style={styles.menuWrapper}>
                                <TouchableOpacity onPress={ ()=>navigation.navigate('Favourites') }>
                                    <View style={styles.manuItem(0.5)}>
                                        <MaterialCommunityIcons 
                                            name='heart-outline'
                                            color={Colors.primary}
                                            size={23}
                                        />
                                        <Text style={styles.manuText}>Favoritos</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={ ()=>navigation.navigate('Orders') }>
                                    <View style={styles.manuItem(0.5)}>
                                        <MaterialCommunityIcons 
                                            name='truck-delivery-outline'
                                            color={Colors.primary}
                                            size={23}
                                        />
                                        <Text style={styles.manuText}>Ordenes</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={ ()=>navigation.navigate('Cart') }>
                                    <View style={styles.manuItem(0.5)}>
                                        <SimpleLineIcons 
                                            name='bag'
                                            color={Colors.primary}
                                            size={22}
                                        />
                                        <Text style={styles.manuText}>Compras</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={ ()=>clearCache() }>
                                    <View style={styles.manuItem(0.5)}>
                                        <MaterialCommunityIcons 
                                            name='cached'
                                            color={Colors.primary}
                                            size={19}
                                        />
                                        <Text style={styles.manuText}>Clear Cache</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={ ()=>logout() }>
                                    <View style={styles.manuItem(0.5)}>
                                        <AntDesign 
                                            name='logout'
                                            color={Colors.primary}
                                            size={17}
                                        />
                                        <Text style={styles.manuText}>Desconectar Cuenta</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={ ()=>deleteAccount() }>
                                    <View style={styles.manuItem(0.5)}>
                                        <AntDesign 
                                            name='deleteuser'
                                            color={Colors.primary}
                                            size={17}
                                        />
                                        <Text style={styles.manuText}>Borrar Cuenta</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        )
                    }

                </View>
            </View>
        </View>
    );
};

export default Profile;
