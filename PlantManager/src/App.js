import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from './styles/colors/Colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}suas plantas {'\n'} de forma fácil
      </Text>

      <Image
        style={styles.image}
        source={require('../src/assets/watering.png')}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça de regar suas plantas. Nós cuidamos de lembrar você sempre
        que precisar
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Icon name="navigate-next" size={30} color={Colors.heading} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: Colors.heading,
  },
  button: {
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
});

export default App;
