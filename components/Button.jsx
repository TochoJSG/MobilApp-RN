import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React from 'react';
import { Colors } from "../constants";

const Button =({title, onPress, isValid, loader})=>{
    return(
        <TouchableOpacity onPress={onPress}
            style={styles.btnStyle(isValid ===false? Colors.adming : Colors.tocha) }
        >
            {
                loader === false ? (
                    <Text style={styles.btnText}>{title}</Text>
                ):(
                    <ActivityIndicator />
                )
            
            }
        </TouchableOpacity>
    )
};

export default Button;

const styles = StyleSheet.create({
    btnStyle:(backgroundColor)=>({
        backgroundColor:backgroundColor,
        height:50,
        width:'100%',
        marginVertical:19,
        backgroundColor:Colors.primary,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:12
    }),
    btnText:{
        fontFamily:'bold',
        color: Colors.white,
        fontSize:17
    },
});