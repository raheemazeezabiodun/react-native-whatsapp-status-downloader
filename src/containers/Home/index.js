import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';




export default class Index extends Component {

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Developed by raheemazeez4@gmail.com</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
