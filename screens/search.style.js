import { StyleSheet } from 'react-native';
import { Colors, SIZE } from '../constants/index';

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: SIZE.medium,
        marginVertical: SIZE.medium,
        marginHorizontal: SIZE.small,
        height:50
    },
    searchIcon: {
        marginHorizontal: 9,
        marginVertical:9,
        color: Colors.gray,
        marginTop: SIZE.small
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: Colors.secondary,
        marginRight: SIZE.small,
        borderRadius: SIZE.small
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZE.small
    },
    searchBtn: {
        width: 35,
        height:35,
        backgroundColor: Colors.primary,
        borderRadius: SIZE.medium,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        padding:5
    }
});

export default styles;