import { StyleSheet } from 'react-native';
import { Colors, SIZE } from '../constants/index';

const styles = StyleSheet.create({
    textStyle: {
        fontFamily:'bold',
        fontSize:37
    },
    appBarWrapper: {
        marginHorizontal:23,
        marginTop: SIZE.small
    },
    appBar: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
        fontFamily: 'semibold',
        fontSize: SIZE.medium,
        alignItems: 'center',
        color: Colors.gray
    },
    cartCount: {
        position: 'absolute',
        bottom:16,
        width:16,
        height:16,
        borderRadius: 16,
        alignItems:'center',
        backgroundColor:'red',
        justifyContent:'center',
        zIndex:999
    },
    cartNumber: {
        fontFamily:'regular',
        fontWeight:'600',
        fontSize: 9,
        color:Colors.lightWhite
    }
});

export default styles;