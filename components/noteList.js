import React from 'react';
import { Text, View } from 'react-native'
import * as firebase from 'firebase';

export default class NoteList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            noteList: []

        }
    }

    componentDidMount() {

    }

    componentWillMount() {
        let planetNoteRef = firebase.database().ref(`/users/${firebase.auth().currentUser.email.replace('.', '')}/notes`)
        debugger


        planetNoteRef.on('value', (snapshot) => {
            this.setState({
                noteList: snapshot.exportVal()
            })
        })
    }

    componentWillUpdate() {

    }

    render() {



        // let planetNoteRef = firebase.database().ref(`/users/${firebase.auth().currentUser.email.replace('.', '')}/notes`)
        // debugger


        // planetNoteRef.on('value', (snapshot) => {
        //     snapshot.forEach((note) => {
        //         if (note.planetId == this.props.planetName) {
        //             this.state.noteList.push(note)
        //             debugger
        //             console.log(note)
        //         }
        //     })
        // })


        return (
            <View>

            </View>
        )
    }

}