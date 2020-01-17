import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";
import * as firebase from "firebase";

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
                <TextInput placeholder={"note title"}
                    onChangeText={(input) => {
                        this.setState({
                            noteName: input.toString()
                        })
                    }}
                />
                <TextInput placeholder={"type a note!"}
                    onChangeText={(input) => {
                        this.setState({
                            note: input.toString()
                        })
                    }}
                    style={{ height: 140, backgroundColor: 'azure', fontSize: 20, textAlign: "auto" }}
                    numberOfLines={10}
                    multiline={true} />
                <Button
                    title="submit note"
                    onPress={() => this.addNote()} />
            </View>
        )
    }
}
