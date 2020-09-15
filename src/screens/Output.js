import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Initial extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Resultado</Text>

        <Text style={styles.subtitle}>Seu IMC</Text>
        <View style={styles.resultBox}>
          <View style={styles.imcBox}>
            <Text style={styles.imcText}>17.9</Text>
          </View>
          <Text style={styles.resultText}>Você está abaixo do peso</Text>
        </View>

        <Text style={styles.subtitle}>IMC ideal</Text>
        <View style={styles.resultBox}>
          <View style={styles.idealBox}>
            <Text style={styles.imcText}>18.5 - 24,9</Text>
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
    color: '#0000ff',
    fontSize: 60,
  },
  subtitle: {
    marginBottom: 16,
    color: '#0000ff',
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
    backgroundColor: '#0000ff',
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
    color: '#0000ff',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  idealBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0000ff',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
