import { StyleSheet, TouchableOpacity } from "react-native";
import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { Colors, SIZE } from "../constants";

const BackBtn = ({onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.backBtn}>
            <Ionicons 
                name='chevron-back-circle'
                size={35}
                color={Colors.primary}
            />
        </TouchableOpacity>
    )
}

export default BackBtn;

const styles = StyleSheet.create({
    backBtn:{
        alignItems:'center',
        position:'absolute',
        zIndex:999,
        top:SIZE.large-9,
    },
});