import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Button,
  AsyncStorage,
} from 'react-native';
import { Constants } from 'expo';
import ListElement from './ListElement';

export default class ListScreen extends Component {
  state = {
    data: [],
  };
  componentWillMount() {
    this.props.navigation.setParams({
      _save: item => this._saveListAsyncStorage(item),
    });
    this._loadFromAsyncStorageOrFetch();
  }
  _loadFromAsyncStorageOrFetch = async () => {
    try {
      const value = await AsyncStorage.getItem('LIST');
      if (value !== null) {
        // We have data!!
        console.log(value);
      } else {
        this._loadInitialList();
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  _saveListAsyncStorage = async item => {
    this.setState({ data: [...this.state.data, item] });
    console.log('save');
    try {
      await AsyncStorage.setItem('LIST', [...this.state.data, item]);
    } catch (error) {
      // Error saving data
    }
  };
  _loadInitialList = () => {
    fetch('http://www.dmi.unict.it/~calanducci/LAP2/favorities.json')
      .then(response => response.json())
      .then(json => this.setState({ data: json.data }));
  };

  _renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.navigate('Details', { item: item })}>
      <ListElement
        source={item.img}
        name={item.name}
        address={item.address}
        tags={item.tags}
      />
    </TouchableHighlight>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, id) => {
            return String(id);
          }}
        />
      </View>
    );
  }
}

ListScreen.navigationOptions = ({ navigation }) => ({
  title: 'Lista posti',
  headerRight: (
    <Button
      title="+"
      onPress={() =>
        navigation.navigate('Add', {
          onSave: item => navigation.state.params._save(item),
        })
      }
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
