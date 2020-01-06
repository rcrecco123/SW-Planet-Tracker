import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native"
import PokeSearch from "./components/pokeSearch";
import DropdownButton from 'react-bootstrap'
import { Picker } from "react-native"
import { SearchBar } from "react-native-elements";
import { TabRouter, StackRouter, create, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';





{/* <PokeSearch style={{ marginTop: 115, paddingTop: 50 }} /> */ }

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

class PlanetShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      componentDidMount: false,
      isLoading: true,
    }
  }

  render() {
    return (
      <View>
        <Text>{this.props.navigation.state.params.planetName}</Text>
      </View>
    )
  }

}

const PlanetStack = createStackNavigator({
  Main: { screen: PokeSearch },
  Details: { screen: PlanetShow }
})

const AppContainer = createAppContainer(PlanetStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
