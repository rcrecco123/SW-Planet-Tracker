import React from "react";
import { Text } from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            email: "",
            password: ""
        })

        this.loginUser = this.loginUser.bind(this);
        this.signUp = this.signUp.bind(this);

    }

    loginUser(email, password) {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res.user.email)
                }).then(() => this.props.navigation.navigate('Main'))
        }

        catch (error) {
            console.log(error.toString());
        }

        this.props.navigation.navigate('Main');

    }

    signUp(email, password) {
        try {
            if (this.state.password.length < 6) {
                alert("Please enter at least 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => this.props.navigation.navigate('Main'))
        }

        catch (error) {
            console.log(error.toString());
        }
    }


    render() {
        return (

            <Container>
                <Text style={{ textAlign: "center", padding: 15, fontSize: 65 }}>Star Wars Planet Tracker</Text>
                <Text style={{ textAlign: "center", fontSize: 20, paddingTop: 10 }}>Galaxy Compendium</Text>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input autoCapitalize="none" autoCorrect={false}
                            onChangeText={(email) => this.setState({ email })} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </Item>
                    <Button full rounded success
                        style={{ margin: 5, marginTop: 25 }}
                        onPress={() => this.loginUser(this.state.email, this.state.password)}>
                        <Text>Login</Text>
                    </Button>
                    <Button full rounded success
                        onPress={() => this.signUp(this.state.email, this.state.password)}
                        style={{ margin: 5 }}>
                        <Text>Sign Up</Text>
                    </Button>
                </Form>
            </Container>

        )
    }

}