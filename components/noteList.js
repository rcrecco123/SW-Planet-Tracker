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
        let planetNoteRef = firebase.database().ref(`/users/${firebase.auth().currentUser.email.replace('.', '')}/notes`)

        planetNoteRef.on('value', (snapshot) => {

            let newVal = snapshot.exportVal();
            let tempNoteList = []
            this.state.noteList = [];

            if (Object.keys(newVal)) {
                Object.keys(newVal).forEach((key) => {
                    if (newVal[key].planetId == this.props.planetName && !this.state.noteList.includes(newVal[key])) {
                        tempNoteList.push(newVal[key])
                    }
                })
            }

            this.setState({
                noteList: tempNoteList,
            })
        })
    }

    componentWillMount() {

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