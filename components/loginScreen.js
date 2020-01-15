import React from "react";
import { Text } from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            email: "",
            password: ""
        })
    }

    loginUser(email, password) {

    }

    signUp(email, password) {
        try {
            if (this.state.password.length < 6) {
                alert("Please enter at least 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password);
        }

        catch (error) {
            console.log(error.toString());
        }
    }


    render() {
        return (

            <Container>
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