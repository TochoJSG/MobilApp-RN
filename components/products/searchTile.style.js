import { StyleSheet } from "react-native";
import { Colors, SIZE } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:SIZE.small,
        flexDirection:'row',
        padding:SIZE.medium,
        borderRadius:SIZE.small,
        backgroundColor:Colors.lightWhite,
        //...SHADOWS.medium,
        shadowColor:Colors.lightWhite,
    },
    image:{
        width:70,
        backgroundColor:Colors.secondary,
        borderRadius:SIZE.medium,
        justifyContent:'center',
        alignContent:'center',
    },
    productImage:{
        width:'100%',
        height:65,
        borderRadius: SIZE.small,
        resizeMode:'cover',
    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZE.medium,
    },
    productTitle:{
        fontSize:SIZE.medium,
        fontFamily:'bold',
        color:Colors.primary,
    },
    supplier:{
        fontSize:SIZE.small+2,
        fontFamily:'bold',
        color:Colors.gray,
        marginTop:3,
    },
});