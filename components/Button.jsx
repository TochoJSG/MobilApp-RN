import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from 'react';
import { Colors } from "../constants";

const Button =({title,onPress})=>{
    return(
        <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    btnStyle:{
        height:50,
        width:'100%',
        marginVertical:19,
        backgroundColor:Colors.primary,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:12,
    },
    btnText:{
        fontFamily:'bold',
        color: Colors.white,
        fontSize:17,
    },
});