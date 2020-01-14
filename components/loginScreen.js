import React from "react";
import { Text } from "react-native";
import { Container, Item, Form, Input, Button, Label } from "native-base";

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (

            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input autoCapitalize="none" autoCorrect={false} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </Item>
                    <Button full rounded success>
                        <Text>Login</Text>
                    </Button>
                </Form>
            </Container>

        )
    }

}