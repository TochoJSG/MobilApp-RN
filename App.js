//import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback , useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation.js';
import { Cart, ProductDetails } from './screens';
/*import ContenidoInicio from './src/componentes/ContenidoInicio.jsx';
import SearchBar from './src/componentes/SearchBar.jsx';
import FullPageMenu from './src/componentes/FullPageMenu.jsx';
import Contact from './src/componentes/Contact.jsx';
import About from './src/componentes/About.jsx';
import Principal from './src/componentes/Principal.jsx';
import Contenido1 from './src/componentes/Contenido1.jsx';
import Contenido2 from './src/componentes/Contenido2.jsx';
import Contenido3 from './src/componentes/Contenido3.jsx';*/

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

  /*const [isActive, setIsActive] = useState(false);//Funcionalidad del componente
  const menutoggle = ()=>{
    setIsActive(!isActive);
  };

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const postContent = () =>{
    fetch('http://localhost:3000/api/contenido', {//Si Expo corre en dispositivo móvil, usa la IP de tu computadora local en lugar de localhost para conectarte al servidor.
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ titulo, texto }),
    })
    .then(response => response.json())
    .then(data => console.log('Contenido guardado:', data) )
    .catch(error => console.error('Error al guardar el contenido:', error) )
  };*/

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Bottom Navigation'
          component={ BottomTabNavigation }
          options={{ headerShown:false }}
        />

        <Stack.Screen 
          name='Cart'
          component={Cart}
          options={{ headerShown:false }}
        />

        <Stack.Screen 
          name='ProductDetails'
          component={ProductDetails}
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}//Close Main Function App



/*const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  textStyle:{
    fontFamily:'regular',
    fontSize:19,
  }
});*/



/*
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
*/