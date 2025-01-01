import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
/*import ContenidoInicio from './src/componentes/ContenidoInicio.jsx';
import SearchBar from './src/componentes/SearchBar.jsx';
import FullPageMenu from './src/componentes/FullPageMenu.jsx';*/
import Contact from './src/componentes/Contact.jsx';
import About from './src/componentes/About.jsx';
import Principal from './src/componentes/Principal.jsx';
import Contenido1 from './src/componentes/Contenido1.jsx';
import Contenido2 from './src/componentes/Contenido2.jsx';
import Contenido3 from './src/componentes/Contenido3.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isActive, setIsActive] = useState(false);//Funcionalidad del componente
  const menutoggle = ()=>{
    setIsActive(!isActive);
  };

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const postContent = () => {
    fetch('http://localhost:3000/api/contenido', {//Si Expo corre en dispositivo móvil, usa la IP de tu computadora local en lugar de localhost para conectarte al servidor.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ titulo, texto }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Contenido guardado:', data);
    })
    .catch(error => {
      console.error('Error al guardar el contenido:', error);
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
        contentStyle: {
        backgroundColor: 'transparent',
        padding: 0, 
        margin: 0, 
        },
        }}
      >
        <Stack.Screen name="Home" component={Principal} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contenido1" component={Contenido1} />
        <Stack.Screen name="Contenido2" component={Contenido2} />
        <Stack.Screen name="Contenido3" component={Contenido3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
