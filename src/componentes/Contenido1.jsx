import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
const Contenido1 = () => {
  const [contenido, setContenido] = useState([]);  // Estado para almacenar el contenido obtenido de la base de datos
  const [loading, setLoading] = useState(true);    // Estado para manejar el estado de carga

  useEffect(() => {
    // Hacer la solicitud GET al servidor para obtener el contenido
    fetch('http://localhost:3000/api/contenido') // Asegúrate de usar la IP correcta si trabajas con Expo en un dispositivo físico
      .then(response => response.json())
      .then(data => {
        setContenido(data);  // Almacenar el contenido en el estado
        setLoading(false);   // Desactivar el estado de carga
      })
      .catch(error => {
        console.error('Error al obtener el contenido:', error);
        setLoading(false);   // Desactivar el estado de carga en caso de error
      });
  }, []);
  // Si los datos están cargando, mostrar un mensaje de carga
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Cargando contenido...</Text>
      </View>
    );
  }
  // Renderizar el contenido obtenido de la base de datos
  
  //OJO             CON data={contenido}        Contiene la data obteninda de la Base de Datos

  //durante la ejecucion item contendra un registro a la vezzz, cambia titulo o texto por los nombres de las columnas definidas en la base
  //Accedemos a ellas con .  ej item.nombre   item.edad   item.precio etc
  return (
    <View style={styles.container}>
      <FlatList
        data={contenido}  // Fuente de datos es el contenido obtenido del servidor
        keyExtractor={item => item.id.toString()}  // Clave única para cada elemento (asumiendo que hay un campo 'id')
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.texto}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
  },
});

export default Contenido1;
