
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';

import Contact from './src/componentes/Contact.jsx';
import About from './src/componentes/About.jsx';
import Principal from './src/componentes/Principal.jsx';
import Contenido1 from './src/componentes/Contenido1.jsx';
import Contenido2 from './src/componentes/Contenido2.jsx';
import Contenido3 from './src/componentes/Contenido3.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart, ProductDetails } from './screens/index';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded) await SplashScreen.hideAsync();
  },[fontsLoaded]);

  if(!fontsLoaded) return null;
  
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
