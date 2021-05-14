import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = ({navigation}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = navigation.addListener('focus', async () => {
      AsyncStorage.getItem('Books').then(data => {
        console.log('data', data);
        const book = JSON.parse(data);
        setBooks([book]);
      });
    });
    return loadBooks;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.toolBox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity
          style={styles.toolBoxButton}
          onPress={() => navigation.navigate('Book')}>
          <Icon name="add" color="white" size={14} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
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
    padding: 10,
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
