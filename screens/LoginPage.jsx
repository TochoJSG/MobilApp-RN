import { Text, Image, ScrollView, TouchableOpacity, TextInput, View } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { BackBtn, Button } from "../components";
import styles from './login.style';
import { Formik } from "formik";
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from "../constants";

const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Contraseña de minimo 8 caracteres')
      .required('Required'),
    email: Yup.string().email('Ingresa una direccion Valida').required('Required'),
  });

const LoginPage = ({navigation}) =>{
    const [loader,setLoader] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [obsecureText, setObsecureText] = useState(false);
    //const [error, setError] = useState({});
    /*const [input, setInput] = useState({
        email:'',
        password:''
    });*/

    return(
        <ScrollView>
            <SafeAreaView style={{marginHorizontal:19}}>
                <View>
                    <BackBtn onPress={()=>navigation.goBack() }/>

                    <Image 
                        source={require('../assets/city.png')}
                        style={styles.cover}
                    />

                <Text style={styles.title}>Surte tu Negocio</Text>
                
                <Formik
                    initialValues={{ email:'',password:'' }}
                    validationSchema={validationSchema}
                    onSubmit={ values=>console.log(values) }
                >
                {({ handleChange, handleBlur, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                    <View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Correo Electronico</Text>
                            <View style={styles.inputWrapper(touched.email ? Colors.secondary : Colors.offwhite)}>
                                <MaterialCommunityIcons
                                    name='email-outline'
                                    size={19}
                                    color={Colors.gray}
                                    style={styles.iconStyle}
                                />
                                <TextInput 
                                    placeholder="Ingresa tu correo"
                                    onFocus={()=>{setFieldTouched('email')}}
                                    onBlur={ ()=>{setFieldTouched('email','')}}
                                    
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={{flex:1}}
                                />
                                {/*value="email"*/}
                            </View>
                        </View>

                        <Button title={"L O G I N"} onPress={()=>{} }/>
                    </View>
                )}

                    
                </Formik>
                </View>
            </SafeAreaView>   
        </ScrollView>
    );
};
export default LoginPage;