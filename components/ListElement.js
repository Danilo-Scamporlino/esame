import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
var { height, width } = Dimensions.get('window');

export default class ListElement extends Component {
  render() {
    return (
      <View>
        <Text style={styles.nome}> {this.props.name} </Text>
        <Image style={styles.image} source={{ uri: this.props.source }} />
        <View style={{ flexDirection: 'row' }}>
          {this.props.tags.map(item => (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tag}> {item} </Text>
              <Text> </Text>
            </View>
          ))}
        </View>

        <Text style={styles.indirizzo}> {this.props.address} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
    backgroundColor: 'cyan',
  },
  nome: {
    margin: 4,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  indirizzo: {
    fontSize: 16,
    color: 'gray',
  },
  image: {
    width: width,
    height: width,
  },
});
