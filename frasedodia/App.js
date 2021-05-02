import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () => {
  const gerarNovaFrase = () => {
    var numeroAleatorio = Math.floor(Math.random() * 5);
    var frases = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5'];

    alert(frases[numeroAleatorio]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.imagem} source={require('./assets/logo.png')} />
        <TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>
          <Text style={styles.textBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textFooter}>
          App criado no curso Desenvolvedor Multiplataforma Android e IOS
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imagem: {
    marginVertical: 15,
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    color: 'green',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textBotao: {
    color: '#ecf0f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textFooter:{
    textAlign:'center',
    fontSize: '12',
    fontWeight: 'bold',
  },
});

export default App;
