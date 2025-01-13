import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

/*export default function ContenidoInicio(){
  return(
  <View style={styles.mainContent}>
    {['Contenido 1', 'Contenido 2', 'Contenido 3'].map((item, index) => (
      <Text key={index} style={styles.contentItem}>{item}</Text>
    ))}
  </View>
  );
}*/
export default function ContenidoInicio(){
  return (
    <View style={styles.mainContent}>
      {['Contenido 1', 'Contenido 2', 'Contenido 3', 'Contenido 4', 'Contenido 5'].map((item, index) => (
        <TouchableOpacity key={index} style={styles.listItem}>
          <Text style={styles.listItemText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = {
  mainContent: {
    position:'relative',
    display:'block',
    backgroundColor: 'rgb(66, 73, 73)',
    height: '100%',
    padding: 66,
    zIndex: 1,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  listItemText: {
    color: '#fff',
    fontSize: 17,
    padding: 10,
  },
};
