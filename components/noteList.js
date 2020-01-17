import React from 'react';
import { Text, View, ScrollView } from 'react-native'
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

            let newVal = snapshot.exportVal();

            let newObj = {};

            this.state.noteList = [];

            Object.keys(newVal).forEach((key) => {
                if (newVal[key].planetId == this.props.planetName && !this.state.noteList.includes(newVal[key])) {
                    this.state.noteList.push(newVal[key])
                }
            })

            this.setState({
                noteList: this.state.noteList,
            })
        })
    }

    componentWillUpdate() {

    }

    render() {

        let noteListComp = this.state.noteList.map((obj) => {
            return (
                <View>
                    <Text style={{ textAlign: 'center', width: '100%', borderRadius: 1, paddingBottom: 10 }}>{firebase.auth().currentUser.email}</Text>
                    <Text style={{ fontSize: 15 }}>{obj.note}</Text>
                </View>
            )
        })

        return (
            <ScrollView>
                {noteListComp}
            </ScrollView>
        )
    }

}