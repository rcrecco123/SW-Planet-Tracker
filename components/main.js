import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Button } from "react-native"
import { SearchBar } from "react-native-elements";
import * as firebase from 'firebase';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "",
            search: "",
            componentDidMount: false,
            isLoading: true,
            planetsLoading: false
        }

        this.searchSwDb = this.searchSwDb.bind(this)
        this.handleSignout = this.handleSignout.bind(this)
    }

    updateSearch = search => {
        this.setState({ search })
    }

    searchSwDb() {
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
    }

    componentWillMount() {
        if (!firebase.auth().currentUser) {
            () => { this.props.navigation.navigate('Login') }
        }
    }

    componentDidMount() {
        this.searchSwDb()
        this.setState({ componentDidMount: true })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search != prevState.search) {
            this.searchSwDb()
        }
    }

    handleSignout() {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        }).catch(function (error) {
            // An error happened.
        });
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
                    <Text style={{ textAlign: "center" }}>Welcome {firebase.auth().currentUser.email}</Text>
                    <Button onPress={() => {
                        this.handleSignout()
                    }}
                        title="sign out" />
                    <SearchBar
                        platform="ios"
                        placeholder="Type here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <Text style={{ padding: 10, marginBottom: 1, textAlign: "center", fontSize: 25 }}>{this.state.data.count} results</Text>

                    <FlatList
                        data={this.state.data.results}
                        keyExtractor={(item, index) => { item.name }}
                        renderItem={({ item }) =>
                            <View
                                key={item.name + "view"}
                                style={{ fontSize: 20, backgroundColor: 'grey', color: "grey" }}>
                                <Button
                                    key={item.name + "button"}
                                    color="blue"
                                    title={`${item.name}`}
                                    onPress={() => this.props.navigation.navigate('Details', { planetName: item.name, planetData: item })}
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
                    <Text style={{ marginTop: 15, fontSize: 20 }}>Galaxy uploading...</Text>
                </View>
            )
        }
    }


}

export default Main;