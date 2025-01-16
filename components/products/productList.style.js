import { StyleSheet } from "react-native";
import { Colors, SIZE } from "../../constants";

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        alignItems:'center',
        padding:SIZE.xxLarge,
        paddingLeft:SIZE.small/2,
    },
    separator:{
        height:16,
    },
});

export default styles;