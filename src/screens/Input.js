import * as React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default class Initial extends React.Component {

  constructor() {
    super();
    this.state = {
      peso: '',
      altura: '',
      language: 'java',

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
          Informe seu peso
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Ex: 50kg"
          placeholderTextColor="#0000ff"
          onChangeText={(val) => this.updateInputVal(val, 'peso')}
          value={this.state.peso}
        />

        <Text style={styles.subtext}>
          Informe sua altura
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Ex: 170cm"
          placeholderTextColor="#0000ff"
          onChangeText={(val) => this.updateInputVal(val, 'peso')}
          value={this.state.peso}
        />

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

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
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0000ff',
    fontSize: 32,
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
    width: '100%',
    backgroundColor: '#fff',
    color: '#0000ff',

    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#0000ff'
  }
});
