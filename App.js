import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native"
import PokeSearch from "./components/pokeSearch";
import DropdownButton from 'react-bootstrap'
import { Picker } from "react-native"
import { SearchBar } from "react-native-elements";



export default function App() {

  return (

    <View style={{ flex: 1, flexDirection: "column" }}>

      <PokeSearch style={{ marginTop: 115, paddingTop: 50 }} />

      <Picker style={{ height: 50, width: 100 }}>
        <Picker.Item label="Grass" value="Cynthia" />
        <Picker.Item label="Ronnie" value="Ronnie" />
        <Picker.Item label="Juul" value="Juul" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
