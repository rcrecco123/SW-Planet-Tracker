import React, { Component } from "react";
import { View, Text, Picker, FlatList, ActivityIndicator } from "react-native";
import { Button } from "react-native"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import { SearchBar } from "react-native-elements";
import { StackNavigator } from "react-navigation";

class PokeSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "",
            search: "",
            componentDidMount: false,
            isLoading: true,
            planetsLoading: false
        }

    }

    updateSearch = search => {
        this.setState({ search })
    }

    componentDidMount() {

        fetch(`https://swapi.co/api/planets/?search=${this.state.search}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then(this.setState({
                planetsLoading: true
            }))
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson,
                    isLoading: false,
                    planetsLoading: false
                })
            })
            .catch((error) => {
                console.error(error);
            })

        this.setState({ componentDidMount: true })
    }

    componentDidUpdate(prevProps, prevState) {
        // this.state.isLoading = false;
        if (this.state.search != prevState.search) {
            fetch(`https://swapi.co/api/planets/?search=${this.state.search}`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({
                        data: responseJson,
                        isLoading: false
                    })
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        // this.state.isLoading = true;
    }


    render() {

        const search = this.state.search;


        if (this.state.data.count) {
            var names = this.state.data['results'].forEach(planet => {
                return (planet.name.toString())
            })
        } else {
            var names = null
        }

        if (!this.state.isLoading) {
            return (
                <View style={{ backgroundColor: 'gray', height: "100%" }}>

                    <SearchBar
                        platform="ios"
                        placeholder="Type here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <Text style={{ padding: 10, marginBottom: 1, textAlign: "center", fontSize: 25 }}>{this.state.data.count} results</Text>
                    {/* <Text>{this.state.data.results.forEach(object => {
                        return (
                            <Button onPress={() => { alert("sUp kiiDd") }} title={`${object.name}`}>{object.name}</Button>
                        )
                    })}</Text> */}

                    <FlatList
                        data={this.state.data.results}
                        renderItem={({ item }) =>
                            <View style={{ fontSize: 20, backgroundColor: 'grey', color: "grey" }}>
                                <Button
                                    color="blue"
                                    title={`${item.name}`}
                                    onPress={() => this.props.navigation.navigate('Details', { planetName: item.name, planetData: item })}
                                    // onPress={() => { alert('sup dude!') }}
                                    style={{ fontSize: 20, backgroundColor: 'black', color: "black" }}>{item.name}</Button>
                            </View>}>

                    </FlatList>

                    <View style={{ color: "black" }}>{names}</View>
                </View>
            )
        } else {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'gray'
                }}>
                    <ActivityIndicator style={{ margin: 0, fontSize: 25, color: "black" }} />
                    <Text style={{ marginTop: 15, fontSize: 20 }}>Loading...</Text>
                </View>
            )
        }
    }


}

export default PokeSearch;