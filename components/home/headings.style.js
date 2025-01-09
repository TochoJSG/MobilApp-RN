//import React from 'react';
import { StyleSheet } from "react-native";
import { Colors,SIZE } from '../../constants/index';
const styles = StyleSheet.create({
    container : {
        marginTop: SIZE.medium,
        //marginBottom: -SIZE.small,
        marginHorizontal:16,
    },
    headerCont :{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle : {
        fontFamily:"semibold",
        fontSize: SIZE.xLarge,
        color:Colors.black,
    }
});
export default styles;