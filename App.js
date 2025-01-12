
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';

import Contact from './src/componentes/Contact.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { Cart, ProductDetails } from './screens/index';
//import BottomTabNavigation from './navigation/BottomTabNavigation.jsx';

const Stack = createNativeStackNavigator();

export default function App(){

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
      <Stack.Navigator>

        <Stack.Screen name="bottomNav" component={ Contact } 
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Cart" component={ Cart } 
          options={{ headerShown:false }} 
        />
        <Stack.Screen name="ProductDetails" component={ ProductDetails } 
          options={{ headerShown:false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
