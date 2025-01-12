import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importar hook de navegación

export default function FullPageMenu({ isActive }) {
  const navigation = useNavigation();  // Hook para acceder a la navegación

  return (
    <View style={[styles.fullPageMenu, isActive && styles.active]}>
      <ScrollView style={styles.nav}>
        <View>
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => navigation.navigate(item)}  // Redirige a la ruta correspondiente
            >
              <Text style={styles.navItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPageMenu: {
    position: 'fixed',
    top: '100%',
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    zIndex: 1,
    opacity: 0,
    transition: '0.5s',
  },
  active: {
    top: 0,
    opacity: 1,
  },
  nav: {
    width: '100%',
    height: '100%',
  },
  navItem: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 10,
  },
  navList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
