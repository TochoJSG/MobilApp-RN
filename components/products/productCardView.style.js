import { StyleSheet } from 'react-native';
import { SIZE,Colors } from '../../constants/index';

const styles = StyleSheet.create({
    container:{
        width: 190,
        height:255,
        marginEnd:19,
        borderRadius:SIZE.medium,
        backgroundColor:Colors.secondary,
    },
    imageContainer:{
        flex:1,
        width:170,
        marginLeft:SIZE.small/2,
        marginTop:SIZE.small/2,
        borderRadius:SIZE.small,
        overflow:'hidden',
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover',
    },
    details:{
        padding:SIZE.small,
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZE.large,
        marginBottom:3,
    },
    supplier:{
        fontFamily:'regular',
        fontSize:SIZE.small,
        color0:Colors.gray,
    },
    price:{
        fontFamily:'bold',
        fontSize:SIZE.medium,
    },
    addBtn:{
        position:'absolute',
        bottom:SIZE.xSmall,
        //right:SIZE.xxLarge-25,
    },
});

export default styles;