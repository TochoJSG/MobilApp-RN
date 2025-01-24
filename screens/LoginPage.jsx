import { Text, Image, ScrollView, TouchableOpacity, TextInput, View, Alert } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { BackBtn, Button } from "../components";
import styles from './login.style';
import { Formik } from "formik";
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from "../constants";
import axios from "axios";

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
    const inValidForm = ()=>{
        Alert.alert(
            "Registro invalido",
            "Ingresa los Datos requeridos",
            [
                {
                    text:"cancelar", onPress:()=>{}
                },
                {
                    test:"continuar", onPress:()=>{}
                },
                {defaultIndex:1},
            ]
        )
    };

    const login = async(values)=>{
        setLoader(true);
        //console.log(values);
        try{
            const endpoint = "http://localhost:3000/api/login";
            const data = values;
            const response = await axios.post(endpoint, data);

            if(response.status === 200){
                setLoader(false);
                console.log(response.data);
            }else{
                Alert.alert(
                    "Logeo fallido",
                    "Por favor ingresa de nuevo  las credenciales correctas",
                    [
                        {
                            text:"cancelar", onPress:()=>{}
                        },
                        {
                            test:"continuar", onPress:()=>{}
                        },
                        {defaultIndex:1},
                    ]
                );
            }
        }catch(error){
            Alert.alert(
                "Ups, hubo un error, prueba de nuevo",
                {error},
                [
                    {
                        test:"aceptar", onPress:()=>{}
                    },
                    {defaultIndex:1},
                ]
            );
        }finally{
            setLoader(false);
        }
    };

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
                    validationSchema={ validationSchema }
                    onSubmit={ (values)=>login(values) }
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
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={{flex:1}}
                                />

                            </View>
                            {touched.email && errors.email &&(
                                <Text style={styles.errorMessage}>{errors.email}</Text>
                            )}
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Contraseña</Text>
                            <View style={styles.inputWrapper(touched.password ? Colors.secondary : Colors.offwhite)}>
                                <MaterialCommunityIcons
                                    name='lock-outline'
                                    size={19}
                                    color={Colors.gray}
                                    style={styles.iconStyle}
                                />
                                <TextInput 
                                    secureTextEntry={obsecureText}
                                    placeholder="Ingresa tu contraseña"
                                    onFocus={()=>{setFieldTouched('password')}}
                                    onBlur={ ()=>{setFieldTouched('password','')}}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={{flex:1}}
                                />

                                <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)} }>
                                    <MaterialCommunityIcons 
                                        name={obsecureText? 'eye-outline':'eye-off-outline' }
                                        size={19}
                                    />
                                </TouchableOpacity>
                                
                            </View>
                            {touched.password && errors.password &&(
                                <Text style={styles.errorMessage}>{errors.password}</Text>
                            )}
                        </View>

                        <Button title={"L O G I N"} 
                            loader={loader}
                            onPress={isValid? handleSubmit : inValidForm }
                            isValid={isValid}
                        />

                        <Text style={styles.registration} onPress={()=>{navigation.navigate('SignUp')} }>¿No tienes Cuenta?, registrate</Text>

                    </View>
                )}

                </Formik>

                </View>
            </SafeAreaView>   
        </ScrollView>
    );
};
export default LoginPage;