import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

var { height, width } = Dimensions.get('window');

export default class DetailScreen extends Component {
  state = {
    region: {
      latitude: 15.0865282,
      longitude: 37.5123621,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922,
    },
    coordinate: {
      latitude: 15.0865282,
      longitude: 37.5123621,
    },
  };
  componentWillMount() {
    this._findLocation();
  }
  _findLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission to access location was  denied');
    }
    let result;
    console.log(this.props.navigation.state.params.item.address);
    try {
      result = await Location.geocodeAsync(
        this.props.navigation.state.params.item.address
      );
    } catch (e) {
      console.log(e.message);
    }
    console.log('risultato', result);
    console.log('latitude', result[0].latitude);
    console.log('longitude', result[0].longitude);
    this.setState({
      region: {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
        latitude: result[0].latitude,
        longitude: result[0].longitude,
      },
    });
  };
  render() {
    return (
      <ScrollView>
        <Text style={styles.nome}>
          {' '}
          {this.props.navigation.state.params.item.name}{' '}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: this.props.navigation.state.params.item.img }}
        />
        <View style={{ flexDirection: 'row' }}>
          {this.props.navigation.state.params.item.tags.map(tag => (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tag}> {tag} </Text>
              <Text> </Text>
            </View>
          ))}
        </View>
        <Text style={styles.indirizzo}>
          {' '}
          {this.props.navigation.state.params.item.address}{' '}
        </Text>
        <Text style={styles.info}>
          Telefono: {this.props.navigation.state.params.item.tel}{' '}
        </Text>
        <Text style={styles.info}>
          Sito web: {this.props.navigation.state.params.item.url}{' '}
        </Text>
        <Text style={styles.info}>
          Descrizione: {this.props.navigation.state.params.item.info}{' '}
        </Text>
        <MapView style={styles.image} region={this.state.region}>
          <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
          />
        </MapView>
      </ScrollView>
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
  info: {
    margin: 4,
    fontSize: 16,
  },
});
