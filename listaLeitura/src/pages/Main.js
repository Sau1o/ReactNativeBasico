import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Main = () => {
  const data = [
    {
      id: '1',
      title: 'Código Limpo',
      anotations: 'Livro muito bom',
      read: false,
      photo: null,
    },
    {
      id: '2',
      title: 'C Completo e total',
      anotations: 'Livro muito bom',
      read: false,
      photo: null,
    },
    {
      id: '3',
      title: 'A bíblia do PHP',
      anotations: 'Livro muito bom',
      read: false,
      photo: null,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.toolBox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity style={styles.toolBoxButton}>
          <Icon name="add" color="white" size={14} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },
  toolBox: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#3498db',
  },
  toolBoxButton: {
    backgroundColor: '#3498db',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
  },
  itemButton: {},
  itemText: {
    fontSize: 16,
  },
});
export default Main;
