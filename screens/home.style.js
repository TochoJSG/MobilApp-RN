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
    }
});

export default styles;