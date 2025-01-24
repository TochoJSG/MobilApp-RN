import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { Cart, ProductDetails, NewRivals, Login, Favourites, Orders, SignUp } from './screens/index';
import BottomTabNavigation from './navigation/BottomTabNavigation.jsx';

const Stack = createNativeStackNavigator();//A esta constante, asignamos todas las propiedades de navegacion de la funcion nativa
/*
Una vez que se asigno a la constante Stack todas las propiedades del metodo nativo, accedemos a funciones especificas con punto

Stack.Screen name="ProductDetails" component={ProductDetails}

donde:
  nombre="" debe ser unico, pues debe identificar al elemento para navegar o encontrar un elemento
  component={ProductDetails} asigna que componente debe mostrar al referirse a ese name, el componente si se puede repeir y reutilizar a voluntad
*/
export default function App(){
  const [ fontsLoaded ] = useFonts({//utilizamos un Hook nativo, es decir una funcionalidad de react-native en este caso para acceder a funcionalidades de estilo
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback( async()=>{
    if(fontsLoaded) await SplashScreen.hideAsync();
  },[fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Navigation" component={ BottomTabNavigation }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Cart" component={ Cart }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="ProductDetails" component={ ProductDetails }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="ProductList" component={ NewRivals }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Login" component={ Login }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Orders" component={ Orders }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Favourites" component={ Favourites }
          options={{ headerShown:false }}
        />
        <Stack.Screen name="SignUp" component={ SignUp }
          options={{ headerShown:false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
/**
 * 
 * Entre los parentesis de return esta lo que se renderiza (lo que se muestra), en este archivo en particular no se muestran los componentes, sinmo que se declaran los componentes que se van a utilizar
 * 
 * Los Hook son funcionalidades especiales que proporcionana funcinalidades e interaccion a las paginas, no estan tan relacionados a la funcionalidad de los procesos sino al comportamiento de las pantallas
 * 
 * name="un_nombre" este atributo identifica un elemento dentro de la interfaz, no se debe repetir
 */

/**
 * Todo el codigo se divide en carpetas para clasificar, ordenar y trabajar mejor el codigo, cada componente tiene la extension *.jsx
 * Los componentes pueden verse como funciones Javascript, parecen pero son un hibriddo
 * La clave para entender los componentes y el codigo en general es atraves de 
 *      export
 *      import
 * con export avisamos que una variable, componeente o atributo debera ser compartido
 * con import avisamos que lo ocuparemos
 * otro aspecto interesante que le da valor a este codigo es que en cada carpeta, screeens, componentes, etc hay un archivo llamado index.js
 * en dicho archivo solo iportamos y exportamos, esto para que, para organizar el codigo, importando solo ese archivo 'index' endremos accesos a TODOs los componentes de esa CARPETA
 */