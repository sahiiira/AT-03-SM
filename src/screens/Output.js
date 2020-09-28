import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Output extends React.Component {

  frase = () => {
    var imc = this.props.route.params.imc;
    if (imc < 18.5) {
      return (<Text style={styles.resultText}>Você está abaixo do peso</Text>);
    } else if (imc <= 24.9) {
      return (<Text style={styles.resultText}>Você está no peso ideal</Text>);
    } else if (imc <= 29.9) {
      return (<Text style={styles.resultText}>Você possui sobrepeso</Text>);
    } else if (imc > 29.9) {
      return (<Text style={styles.resultText}>Você possui obesidade</Text>);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Resultado</Text>

        <Text style={styles.subtitle}>Seu IMC</Text>
        <View style={styles.resultBox}>
          <View style={styles.imcBox}>
            <Text style={styles.imcText}>{this.props.route.params.imc}</Text>
          </View>
          {this.frase()}
        </View>

        <Text style={styles.subtitle}>IMC ideal</Text>
        <View style={styles.resultBox}>
          <View style={styles.idealBox}>
            <Text style={styles.imcText}>18.5 - 24.9</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  text: {
    marginVertical: '5%',
    fontWeight: 'bold',
    color: '#3A48EC',
    fontSize: 60,
  },
  subtitle: {
    marginBottom: 16,
    color: '#3A48EC',
    fontSize: 36,
    marginTop: 40,
  },
  resultBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  imcBox: {
    width: '50%',
    aspectRatio: 1,
    backgroundColor: '#3A48EC',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imcText: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    margin: 12,
  },
  resultText: {
    flex: 1,
    color: '#3A48EC',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  idealBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3A48EC',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
