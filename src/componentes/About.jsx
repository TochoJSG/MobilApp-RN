import React from 'react';
import { Text, View, Button } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View>
      <Text>Hola, Somos una consultoría de Software</Text>
      {/* Botón para redirigir a la pantalla Home */}
      <Button 
        title="Ir a Home" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
};

export default About;
