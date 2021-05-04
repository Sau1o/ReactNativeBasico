import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = () => {
  const [title, onChangeTitle] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu Novo Livro...</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholderTextColor="gray"
        placeholder="Nome do Livro"
      />
      <TextInput
        style={styles.input}
        //onChangeText={onChangeTitle}
        //value={title}
        placeholderTextColor="gray"
        placeholder="Descrição do Livro"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.cameraButton}>
        <Icon name="photo-camera" color="white" size={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomColor: '#f39c12',
    borderBottomWidth: 1,
    marginBottom: 10,
    color: 'black',
  },
  cameraButton: {
    backgroundColor: '#f39c12',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#f39c12',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#95a5a6',
    fontSize: 16,
  },
});

export default Book;
