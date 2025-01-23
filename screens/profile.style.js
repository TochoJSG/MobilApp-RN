import { StyleSheet } from 'react-native';
import { Colors, SIZE } from '../constants/index';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.lightWhite,
    },
    cover:{
        height:255,
        width:'100%',
        resizeMode:'cover',
        opacity: .6,
    },
    profileCont:{
        flex:1,
        alignItems:'center',
    },
    profile:{
        width:125,
        height:125,
        borderRadius:99,
        borderColor:Colors.primary,
        borderWidth:3,
        resizeMode:'cover',
        marginTop:-117,
        backgroundColor:Colors.gray2,
    },
    name:{
        fontFamily:'bold',
        color:Colors.primary,
        marginVertical:6,
    },
    loginBtn:{
        backgroundColor:Colors.secondary,
        padding:3,
        borderWidth:0.4,
        borderColor:Colors.primary,
        borderRadius:SIZE.xxLarge,
    },
    menuText:{
        fontFamily:'regular',
        color:Colors.gray,
        marginLeft:19,
        fontWeight:'600',
        fontSize:16,
        lineHeight:25,
    },
    menuWrapper:{
        marginTop:SIZE.xLarge,
        width:SIZE.width - SIZE.large,
        backgroundColor:Colors.lightWhite,
        borderRadius:11,
    },
    manuText:{
        fontFamily:'regular',
        color:Colors.gray,
        marginLeft:19,
        fontWeight:300,
        fontSize:16,
        lineHeight:25,
    },
    manuItem: (borderBottomWidth)=>({
        borderBottomWidth:borderBottomWidth,
        flexDirection:'row',
        paddingVertical:16,
        paddingHorizontal:30,
        borderColor:Colors.gray,
    })
});

export default styles;