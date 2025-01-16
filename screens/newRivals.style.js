import { StyleSheet } from 'react-native';
import { Colors, SIZE } from '../constants/index';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.lightWhite,
    },
    wrapper:{
        flex:1,
        backgroundColor:Colors.lightWhite,
    },
    upperRow:{
        width:SIZE.width-50,
        marginHorizontal:SIZE.large,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        position:'absolute',
        backgroundColor:Colors.primary,
        borderRadius:SIZE.large,
        top:SIZE.large,
        zIndex:999,
    },
    heading:{
        color:Colors.lightWhite,
        fontFamily:'semibold',
        fontSize:SIZE.medium,
        marginLeft:6,
    },
});

export default styles;