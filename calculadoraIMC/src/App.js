import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(0);
  const [legenda, setLegenda] = useState('Indeterminado');
  const [cor, setCor] = useState('#bdc3c7');

  const calcularIMC = () => {
    const resultado = peso / (altura * altura);
    setImc(Math.ceil(resultado));

    if (resultado < 18.5) {
      setLegenda('Magreza');
      setCor('#e74c3c');
    } else if (resultado >= 18.5 && resultado < 25) {
      setLegenda('Normal');
      setCor('#2ecc71');
    } else if (resultado >= 25 && resultado < 30) {
      setLegenda('Sobrepeso');
      setCor('#f1c40f');
    } else if (resultado >= 30 && resultado < 40) {
      setLegenda('Obesidade');
      setCor('#e67e22');
    } else if (resultado >= 40) {
      setLegenda('Obesidade Grave');
      setCor('#e74c3c');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.legenda}>Seu IMC</Text>

      <View style={[styles.IMCView, {backgroundColor: cor}]}>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput
          style={styles.peso}
          onChangeText={setPeso}
          value={peso}
          placeholderTextColor="black"
          placeholder="Digite seu peso"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.altura}
          onChangeText={setAltura}
          value={altura}
          placeholderTextColor="black"
          placeholder="Digite sua altura em metros"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  IMCView: {
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 150,
    alignSelf: 'center',
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: '#000',
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
  },
  altura: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: '#000',
    width: 200,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#bdc3c7',
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    width: 150,
  },
  textButton: {
    fontWeight: 'bold',
  },
});

export default App;
