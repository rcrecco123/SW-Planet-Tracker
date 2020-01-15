import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native"
import Main from "./components/main";
import DropdownButton from 'react-bootstrap'
import { Picker } from "react-native"
import { SearchBar } from "react-native-elements";
import { TabRouter, StackRouter, create, createAppContainer } from "react-navigation";
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack';
import Login from "./components/loginScreen";
import * as firebaseR from "firebase";
import ApiKeys from "./constants/apiKeys";
import AuthLoadingScreen from "./components/AuthLoadingScreen";


let firebaseConfig = {
  apiKey: "AIzaSyDaqnsuObn12NhkKMbR5psI4_0luDcznoE",
  authDomain: "star-wars-planet-tracker.firebaseapp.com",
  databaseURL: "https://star-wars-planet-tracker.firebaseio.com",
  projectId: "star-wars-planet-tracker",
  storageBucket: "star-wars-planet-tracker.appspot.com",
  messagingSenderId: "773485175703",
  appId: "1:773485175703:web:122f7edbb11992ee779ad2",
  measurementId: "G-6VD1RWTRDG"
}


firebaseR.initializeApp(firebaseConfig)

{/* <PokeSearch style={{ marginTop: 115, paddingTop: 50 }} /> */ }

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false,
    }


  }



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
      <View style={{ backgroundColor: "gray", height: "100%" }}>
        <Text style={{ padding: 10, fontSize: 20 }}>Planet Name: {this.props.navigation.state.params.planetName}</Text>
        <Text style={{ padding: 10, fontSize: 20 }}>Climate: {this.props.navigation.state.params.planetData.climate}</Text>
        <Text style={{ padding: 10, fontSize: 20 }}>Diameter: {this.props.navigation.state.params.planetData.diameter}</Text>
        <Text style={{ padding: 10, fontSize: 20 }}>Orbital Period: {this.props.navigation.state.params.planetData.orbital_period}</Text>
        <Text style={{ padding: 10, fontSize: 20 }}>Rotation Period: {this.props.navigation.state.params.planetData.rotation_period}</Text>
        <Text style={{ padding: 10, fontSize: 20 }}>Surface Water: {this.props.navigation.state.params.planetData.surface_water}</Text>
        <Text style={{ padding: 10, fontSize: 20 }}>Terrain: {this.props.navigation.state.params.planetData.terrain}</Text>
      </View>
    )
  }

}


const PlanetStack = createStackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
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
