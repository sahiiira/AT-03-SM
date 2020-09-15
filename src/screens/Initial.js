import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Initial extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={require("../assets/icon.png")}
          />
          <Text style={styles.text}>Calculadora de IMC</Text>
        </View>

        <Image
          style={styles.img}
          source={require("../assets/initialImg.png")}
        />

        <View
          style={styles.buttonView}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Input')}
          >
            <Text style={styles.buttonText}>
              Iniciar
          </Text>
          </TouchableOpacity>
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
  },
  logoContainer: {
    width: '100%',
    paddingTop: 64,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  logoImg: {
    width: 120,
    resizeMode: 'contain',
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
    marginVertical: 16,
  },
  text: {
    fontWeight: 'bold',
    color: '#0000ff',
    fontSize: 32,
  },
  buttonView: {
    padding: 32,
    marginBottom: 64,
    marginHorizontal: 32,
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
