import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native";
import * as firebase from "firebase";

export default class PlanetNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: "",
            planetId: props.planetId
        }
    }


    addNote() {
        let db = firebase.database();
        let ref = db.ref();
        let rootRef = ref.child('users');

        var pushNotes = rootRef.child('notes')

        var specificRef = firebase.database().ref('star-wars-planet-tracker/users/notes');

        userRef.update({

            []: {
                planetId: this.props.planetName,
                authorId: firebase.auth().currentUser.uid,
                note: this.state.note
            }
        })

    }

    componentDidMount() {

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
                    onPress={() => this.addNote()} />

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