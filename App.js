import React from 'react';
import Main from "./components/main";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack';
import Login from "./components/loginScreen";
import * as firebase from "firebase";
import PlanetShow from "./components/planetShow";

var firebaseConfig = {
  apiKey: "AIzaSyDaqnsuObn12NhkKMbR5psI4_0luDcznoE",
  authDomain: "star-wars-planet-tracker.firebaseapp.com",
  databaseURL: "https://star-wars-planet-tracker.firebaseio.com",
  projectId: "star-wars-planet-tracker",
  storageBucket: "star-wars-planet-tracker.appspot.com",
  messagingSenderId: "773485175703",
  appId: "1:773485175703:web:122f7edbb11992ee779ad2",
  measurementId: "G-6VD1RWTRDG"
}

firebase.initializeApp(firebaseConfig);

const PlanetStack = createStackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
  Details: { screen: PlanetShow }
})

const AppContainer = createAppContainer(PlanetStack);

firebase.auth().onAuthStateChanged(function (user) {
  if (!user) {
    () => this.props.navigation.navigate('Login', { planetName: item.name, planetData: item })
  } else {
    () => this.props.navigation.navigate('Main');
  }
});

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false,
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged')
      }
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        () => this.props.navigation.navigate('Login', { planetName: item.name, planetData: item })
      } else {
        () => this.props.navigation.navigate('Main');
      }
    });

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        () => this.props.navigation.navigate('Login', { planetName: item.name, planetData: item })
      } else {
        () => this.props.navigation.navigate('Main');
      }
    });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <AppContainer />
    )
  }
}




