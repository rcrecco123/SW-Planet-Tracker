import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";
import * as firebase from "firebase";

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




export default class PlanetNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: ""
        }
    }


    addNote() {
        notes.push({
            note: this.state.note
        })
    }
    componentDidMount() {
        this.state.usersNotes = firebase.database().ref("users/planets/notes");
    }

    render() {
        return (
            <View>
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
                    onPress={() => {
                        fetch('https://star-wars-planet-tracker.firebaseio.com/notes/', {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                firstParam: 'yourValue',
                                secondParam: 'yourOtherValue',
                            }),
                        })
                    }} />

            </View>
        )
    }

}




// curl - X PUT - d '{
// "alanisawesome": {
//     "name": "Alan Turing",
//         "birthday": "June 23, 1912"
// }
// }' 'https://star-wars-planet-tracker.firebaseio.com/'