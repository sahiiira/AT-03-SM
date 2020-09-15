import * as React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default class Initial extends React.Component {

  constructor() {
    super();
    this.state = {
      peso: '',
      altura: '',
      idade: 'idade',
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.text}>
          Informe os dados abaixo para calcular
        </Text>

        <Text style={styles.subtext}>
          Seu peso
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Ex: 50kg"
          placeholderTextColor="#0000ff"
          onChangeText={(val) => this.updateInputVal(val, 'peso')}
          value={this.state.peso}
        />

        <Text style={styles.subtext}>
          Sua altura
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Ex: 170cm"
          placeholderTextColor="#0000ff"
          onChangeText={(val) => this.updateInputVal(val, 'altura')}
          value={this.state.altura}
        />

        <Text style={styles.subtext}>
          Sua idade
        </Text>

        <Picker
          selectedValue={this.state.idade}
          style={styles.list}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ idade: itemValue })
          }>
          <Picker.Item label="Criança" value="crianca" />
          <Picker.Item label="Adulto" value="adulto" />
          <Picker.Item label="Idoso" value="idoso" />
        </Picker>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
        //onPress={() => this.props.navigation.navigate('Input')}
        >
          <Text style={styles.buttonText}>
            Calcular
          </Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0000ff',
    fontSize: 32,
    marginBottom: 64,
  },
  subtext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0000ff',
    fontSize: 24,
  },
  textInput: {
    padding: 10,
    paddingLeft: 20,
    marginVertical: 12,
    marginBottom: 32,

    width: '100%',
    backgroundColor: '#fff',
    color: '#0000ff',

    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#0000ff'
  },
  list: {
    width: '100%',
    color: '#0000ff',
    marginBottom: 32,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: '#0000ff',
    alignContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});
