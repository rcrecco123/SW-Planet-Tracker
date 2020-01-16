import React from "react";
import { View, Text } from 'react-native';
import PlanetNote from "./planetNote";



export default class PlanetShow extends React.Component {
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
                <PlanetNote />
            </View>
        )
    }

}