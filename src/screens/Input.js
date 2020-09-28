import * as React from 'react';
import { Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Input extends React.Component {

  constructor() {
    super();
    this.state = {
      peso: '',
      altura: '',
      idade: 'criança',
      showAlert: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  calcularImc() {
    var imcTemp = (this.state.peso / (this.state.altura * this.state.altura)).toFixed(1);
    if (imcTemp != undefined && imcTemp != 'NaN' && this.state.altura != "" && this.state.peso != "") {
      this.props.navigation.replace('Output', {
        imc: imcTemp
      });
    } else {
      this.showAlert();
    }
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
          placeholder="Ex: 50"
          placeholderTextColor="#3A48EC"
          keyboardType="number-pad"
          onChangeText={(val) => this.updateInputVal(val, 'peso')}
          value={this.state.peso}
        />

        <Text style={styles.subtext}>
          Sua altura
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Ex: 1.70"
          placeholderTextColor="#3A48EC"
          keyboardType="number-pad"
          onChangeText={(val) => this.updateInputVal(val, 'altura')}
          value={this.state.altura}
        />

        <Text style={styles.subtext}>
          Sua idade
        </Text>

        <Picker
          selectedValue={this.state.idade}
          style={styles.list}
          onValueChange={(value, index) => { this.setState({ idade: value }) }}>
          <Picker.Item label="Criança" value="crianca" />
          <Picker.Item label="Adulto" value="adulto" />
          <Picker.Item label="Idoso" value="idoso" />
        </Picker>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => this.calcularImc()}
        >
          <Icon name="done" size={40} style={styles.buttonText}></Icon>
        </TouchableOpacity>

        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Erro!"
          message="Insira seus dados"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Tentar novamente"
          confirmButtonColor="#3A48EC"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />

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
    color: '#3A48EC',
    fontSize: 32,
    marginBottom: 64,
  },
  subtext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3A48EC',
    fontSize: 24,
  },
  textInput: {
    padding: 10,
    paddingLeft: 20,
    marginVertical: 12,
    marginBottom: 32,

    width: '100%',
    backgroundColor: '#fff',
    color: '#3A48EC',

    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#3A48EC'
  },
  list: {
    width: '100%',
    color: '#3A48EC',
    marginBottom: 32,
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: '#3A48EC',
    alignContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
  }
});
