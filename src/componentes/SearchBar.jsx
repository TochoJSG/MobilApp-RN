import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Alert, Animated, StyleSheet } from 'react-native'; 
import FullPageMenu from './FullPageMenu';  // Asegúrate de importar tu componente
import ContenidoInicio from './ContenidoInicio.jsx';
export default function SearchBar() {
  const [navActive, setNavActive] = useState(false);  // Controla el estado del menú
  const [toggleActive, setToggleActive] = useState(false);  // Controla el estado del ícono de menú
  const animation = useState(new Animated.Value(0))[0]; // Inicializa la animación

  const menutoggle = () => {
    setNavActive(!navActive);
    setToggleActive(!toggleActive);

    Animated.timing(animation, {
      toValue: navActive ? 0 : 1,  // Si el menú está activo lo oculta, si no, lo muestra
      duration: 500,  // Duración de la animación
      useNativeDriver: false
    }).start();
  };

  return (
    <>
      <View style={styles.barra}>
        <TouchableOpacity onPress={menutoggle} style={styles.menuIcon}>
          <View style={[styles.menuImage, toggleActive && styles.activeMenuIcon]} />
        </TouchableOpacity>
      
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="type . . ."
          />
          <Button
            title="Search"
            style={styles.submitButtonn}
            onPress={() => Alert.alert('Hallo, Searching...')}
          />
        </View>
      </View>

      {/* Aquí pasamos el estado navActive al componente FullPageMenu */}
      {navActive ? (
        <FullPageMenu isActive={navActive} />
      ) : (
        <ContenidoInicio />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  barra: {
    position: 'fixed',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 19,
    width: '100%',
    height:90,
  },
  menuIcon: {
    top:17,
    width: 50,
    height: 50,
    backgroundColor: '#CA4747',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    right:-55,
  },
  textInput: {
    backgroundColor: '#fff',
    width: '50%',
    height: 35,
    borderRadius: 15,
    borderTopRightRadius: 0, // Radio de esquina superior derecha
    borderBottomRightRadius: 0,
    paddingHorizontal: 25,
    fontSize: 18,
  },
  activeMenuIcon: {
    backgroundColor: 'blue',
  },
});

/*import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity,Alert,ScrollView,Text,Animated} from 'react-native'; //Importamos los elementos que utilizaremos

export default function SearchBar() {   //Este es el componente, se define como funcion y se exporta

  const [navActive, setNavActive] = useState(false);  // Controla el estado del menú
  const [toggleActive, setToggleActive] = useState(false);  // Controla el estado del ícono de menú
  const animation = useState(new Animated.Value(0))[0]; // Inicializa la animación

  const menutoggle = () => {
    setNavActive(!navActive);
    setToggleActive(!toggleActive);
    // Inicia la animación de mostrar u ocultar el menú
    Animated.timing(animation, {
      toValue: navActive ? 0 : 1, // Si el menú está activo lo oculta, si no, lo muestra
      duration: 500, // Duración de la animación
      useNativeDriver: false
    }).start();
  };

  // Define las propiedades interpoladas para mostrar/ocultar el menú
  const menuHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  const menuOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });


  return (
  <>
    <View style={styles.barra}>
      <TouchableOpacity onPress={menutoggle} style={styles.menuIcon}>
        <View style={[styles.menuImage, toggleActive && styles.activeMenuIcon]} />
       </TouchableOpacity>
      
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="type . . ."
        />
        <Button
          title="Search"
          style={styles.submitButtonn}
          onPress={() => {
            // Acción del botón de búsqueda
            Alert.alert('hola')
          }}
        />
      </View>
    </View>

    {/ *
    <Animated.View style={[styles.fullPageMenu, { height: menuHeight, opacity: menuOpacity }]}>
      <ScrollView style={styles.nav}>
        <View style={styles.navList}>
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <TouchableOpacity key={item}>
              <Text style={styles.navItem}>{item}</Text>
            </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </Animated.View>
    * /}
  </>
  );
}

const styles = {
  barra: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputBox: {
    top:17,
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 33,
    flex: 1,
    marginRight: -66,
  },
  textInput: {
    backgroundColor: '#fff',
    width: '50%',
    height: '100%',
    borderRadius: 15,
    borderTopRightRadius: 0, // Radio de esquina superior derecha
    borderBottomRightRadius: 0,
    paddingHorizontal: 25,
    fontSize: 18,
  },
  submitButtonn: {
    backgroundColor: '#ffc107',
    width: 55,
    height:'100%',
    borderRadius: 0,
    fontSize: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitImage: {
    width: 25,
    height: 25,
  },
  menuIcon: {
    top:17,
    backgroundColor: '#CA4747',
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuImage: {
    width: 40,
    height: 40,
    backgroundColor: '#CA4747',
  },
  activeMenuIcon: {
    backgroundColor: '#CA4747',
  },

  fullPageMenu: {
    position: 'absolute',
    top: 70, // Debajo de la barra
    left: 0,
    width: '100%',
    backgroundColor: '#111',
    zIndex: 3,
  },
  nav: {
    width: '100%',
  },
  navList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItem: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 15,
  },
};*/
