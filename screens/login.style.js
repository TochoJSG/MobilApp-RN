import { StyleSheet } from "react-native";
import { Colors, SIZE } from "../constants";

const styles = StyleSheet.create({
    cover:{
        height:SIZE.height / 2.5,
        width:'100%',//SIZE.width-60
        resizeMode:'cover',//contain
        alignItems:'center',
        marginBottom:SIZE.xxLarge,
        opacity:0.6,
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZE.xLarge,
        color:Colors.primary,
        alignItems:'center',
        marginBottom:SIZE.xxLarge,
    },
    wrapper:{
        //marginHorizontal:19,
        marginBottom:19,
    },
    label:{
        fontFamily:'regular',
        fontSize:SIZE.xSmall,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right',
    },
    iconStyle:{
        marginRight:9,
    },
    inputWrapper:(borderColor)=>({
        borderColor:borderColor,
        backgroundColor:Colors.lightWhite,
        borderWidth:1,
        height:50,
        borderRadius:12,
        flexDirection:'row',
        paddingHorizontal:16,
        alignItems:'center',
    }),
    errorMessage:{
        color:Colors.red,
        fontFamily:'regular',
        marginTop:5,
        marginLeft:5,
        fontSize:SIZE.xSmall,
    },
    registration:{
        marginTop:1,
        textAlign:'center',
        marginBottom:19,
    },
    coverSignUp:{
        height:SIZE.height / 5,
        width:'100%',//SIZE.width-60
        resizeMode:'cover',//contain
        alignItems:'center',
        marginBottom:SIZE.small,
        opacity:0.6,
    },
})

export default styles;