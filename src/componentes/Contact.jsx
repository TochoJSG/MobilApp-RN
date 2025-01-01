import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

function Contact({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && message) {
      Alert.alert('Mensaje Enviado', `Gracias por contactarnos, ${name}`);
      // Aquí podrías manejar el envío de datos a tu servidor
      
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos');
    }
  };

  return (
    <View style={estiloContacto.container}>
      <Text style={estiloContacto.encabezado}>Contactanos</Text>
      
      <Text style={estiloContacto.label}>Nombre</Text>
      <TextInput
        style={estiloContacto.input}
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={estiloContacto.label}>Correo Electrónico</Text>
      <TextInput
        style={estiloContacto.input}
        placeholder="Tu correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={estiloContacto.label}>Mensaje</Text>
      <TextInput
        style={estiloContacto.textArea}
        placeholder="Tu mensaje"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button title="Enviar" onPress={handleSubmit} />

      {/* Botón adicional para redirigir a la pantalla Home */}
      <Button 
        title="Ir a Home" 
        onPress={() => navigation.navigate('Home')} 
        color="#333"  // Mantén el botón en un tono neutro para no contrastar con el estilo
      />
    </View>
  );
}

const estiloContacto = StyleSheet.create({
  encabezado: {
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

export default Contact;
