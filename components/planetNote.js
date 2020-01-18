import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PlanetNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: "",
            noteName: "",
            planetId: props.planetId
        }
    }


    addNote() {
        var specificRef = firebase.database().ref(`users/${firebase.auth().currentUser.email.toString().replace('.', '')}/notes`);

        specificRef.update({
            [this.state.noteName]: {
                planetId: this.props.planetName,
                authorId: firebase.auth().currentUser.uid,
                note: this.state.note,
                authorEmail: firebase.auth().currentUser.email
            }
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <View>
                <View style={{ borderColor: 'black', borderWidth: 1, marginBottom: 1 }}>
                    <TextInput placeholder="note title"
                        style={{ backgroundColor: 'azure' }}
                        onChangeText={(input) => {
                            this.setState({
                                noteName: input.toString()
                            })
                        }}
                    />
                </View>
                <View style={{ borderColor: 'black', borderWidth: 1 }}>
                    <TextInput placeholder="type a note!"
                        onChangeText={(input) => {
                            this.setState({
                                note: input.toString()
                            })
                        }}
                        style={{ height: 140, backgroundColor: 'azure', fontSize: 20, textAlign: "auto" }}
                        numberOfLines={10}
                        multiline={true} />
                </View>
                <TouchableOpacity onPress={() => this.addNote()} >
                    <Text style={{ textAlign: 'center', borderColor: 'black', borderWidth: 1 }}>submit note!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
