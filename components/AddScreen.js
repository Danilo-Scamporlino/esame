import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class addScreen extends Component {
  state = {
    name: '',
    address: '',
    info: '',
    tel: '',
    img: '',
    url: '',
    tags: [],
  };
  /*"id": "000001",
      "name": "Sazi e Sani",
      "address": "Via Sisto 46/48, Catania",
      "info":
        "Italiana, Pizza, Mediterranea, aperto anche a pranzo, ottime pizze leggere",
      "tel": "+39 095 715 9794",
      "img":
        "https://media-cdn.tripadvisor.com/media/photo-o/0d/06/2e/52/bey8qhvi1s7ekn7qgibpxyuigzdv9m.jpg",
      "url": "http://www.saziesani.it/",
      "tags": ["ristorante", "pizzeria"]*/

  render() {
    return (
      <View>
        <View>
          <Text>Nome: </Text>
          <TextInput
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />
        </View>
        <View>
          <Text>Indirizzo: </Text>
          <TextInput
            value={this.state.address}
            onChangeText={text => this.setState({ address: text })}
          />
        </View>
        <View>
          <Text>info: </Text>
          <TextInput
            value={this.state.info}
            onChangeText={text => this.setState({ info: text })}
          />
        </View>
        <View>
          <Text>Telefono: </Text>
          <TextInput
            value={this.state.tel}
            onChangeText={text => this.setState({ tel: text })}
          />
        </View>
        <View>
          <Text>immagine: </Text>
          <TextInput
            value={this.state.img}
            onChangeText={text => this.setState({ img: text })}
          />
        </View>
        <View>
          <Text>Sito: </Text>
          <TextInput
            value={this.state.url}
            onChangeText={text => this.setState({ url: text })}
          />
        </View>
        <View>
          <Text>Tags: </Text>
          <TextInput
            value={this.state.tags}
            onChangeText={text => this.setState({ tags: text })}
          />
        </View>
        <Button
          title="save"
          onPress={() => this.props.navigation.state.params.onSave()}
        />
      </View>
    );
  }
}
