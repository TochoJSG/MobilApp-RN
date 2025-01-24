import { Text, Image, ScrollView, TouchableOpacity, TextInput, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackBtn, Button } from "../components";
import { Formik } from "formik";
import * as Yup from 'yup';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants";
import React, { useState } from 'react';
import styles from './login.style';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3,'Comparte tu ubicacion')
        .required('Required'),
    email: Yup.string().email('Ingresa una direccion Valida').required('Required'),
    password: Yup.string()
      .min(8, 'Contraseña de minimo 8 caracteres')
      .required('Required'),
    location: Yup.string()
        .min(3,'Comparte tu nombre de usuario')
        .required('Required'),
  });

const SignUp = ({navigation}) =>{
    const [loader, setLoader] = useState(false);
    const [obsecureText, setObsecureText] = useState(false);

    const invalidForm = ()=>{
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
    return(
        <ScrollView>
            <SafeAreaView style={{marginHorizontal:19}}>
                <View>
                    <BackBtn onPress={()=>navigation.goBack() }/>

                    <Image 
                        source={require('../assets/city.png')}
                        style={styles.coverSignUp}
                    />

                <Text style={styles.title}>Surte tu Negocio</Text>
                
                <Formik
                    initialValues={{ username:'',email:'',password:'',location:'' }}
                    validationSchema={ validationSchema }
                    onSubmit={ (values)=>console.log(values) }
                >
                {({ handleChange, handleBlur, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Nombre de tu negocio</Text>
                            <View style={styles.inputWrapper(touched.username ? Colors.secondary : Colors.offwhite)}>
                                <MaterialCommunityIcons
                                    name='face-man-profile'
                                    size={19}
                                    color={Colors.gray}
                                    style={styles.iconStyle}
                                />
                                <TextInput 
                                    placeholder="Ingresa tu nombre o el de tu negocio"
                                    onFocus={()=>{setFieldTouched('username')}}
                                    onBlur={ ()=>{setFieldTouched('username','')}}
                                    value={values.username}
                                    onChangeText={handleChange('username')}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={{flex:1}}
                                />

                            </View>
                            {touched.username && errors.username &&(
                                <Text style={styles.errorMessage}>{errors.username}</Text>
                            )}
                        </View>

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
                            <Text style={styles.label}>Compartenos tu Ubicacion</Text>
                            <View style={styles.inputWrapper(touched.location ? Colors.secondary : Colors.offwhite)}>
                                <Ionicons
                                    name='location-outline'
                                    size={19}
                                    color={Colors.gray}
                                    style={styles.iconStyle}
                                />
                                <TextInput 
                                    placeholder="Ingresa tu Ubicacion"
                                    onFocus={()=>{setFieldTouched('location')}}
                                    onBlur={ ()=>{setFieldTouched('location','')}}
                                    value={values.location}
                                    onChangeText={handleChange('location')}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={{flex:1}}
                                />

                            </View>
                            {touched.location && errors.location &&(
                                <Text style={styles.errorMessage}>{errors.location}</Text>
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

                        <Button title={"R E G I S T R A R"} 
                            onPress={isValid? handleSubmit:invalidForm }
                            isValid={isValid}
                        />

                        <Text style={styles.registration} onPress={()=>{navigation.navigate('Login')} }>¿Ya tienes Cuenta?, logeate</Text>

                    </View>
                )}

                </Formik>

                </View>
            </SafeAreaView>   
        </ScrollView>
    )
}

export default SignUp;