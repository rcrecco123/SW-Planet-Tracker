import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Button } from "react-native"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import { SearchBar } from "react-native-elements";

class PokeSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "q",
            search: "",
            componentDidMount: false,
            isLoading: true
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

        this.setState({ componentDidMount: true })
    }

    componentDidUpdate() {
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
                <View>
                    <Text>

                    </Text>
                    <Text>

                    </Text>
                    <Text>

                    </Text>
                    <Text>
                    </Text>
                    <SearchBar
                        platform="ios"
                        placeholder="Type here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <Text style={{ fontSize: 25, }}>{this.state.data.count}</Text>
                    <View>{names}</View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>LOADING!!</Text>
                </View>
            )
        }
    }


}

export default PokeSearch;