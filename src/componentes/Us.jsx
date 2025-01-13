import { View, Text, Button, TouchableOpacity, Alert, Animated, StyleSheet } from 'react-native';

function Contact(){
    return(
        <View style={estiloNos.usCont}>
            <Text style={estiloNos.us}>Somos una consultoria de Software integrada por egresados de UPIICSA</Text>
        </View>
    );
}

const estiloNos = StyleSheet.create({
    usCont:{
        backgroundColor:'#111',
        color:'#fff',
    },
    us:{
        padding:'100px',
        fontSize:'17px',
        letterSpacing:'6px',
        fontWeight:300,
    },
});
export default Contact;