import React, { Component } from 'react';
import { ListView, Image } from 'react-native';
import { Container, Card, CardItem, Button, Icon, Left, Right, Text, Body, Segment } from 'native-base';

import { getWhatsappStatusDirectory, downloadFiles } from '../../utils/helpers';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2; } });

export default class RenderImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            show: false,
            refreshing: false
        }
    }

    componentDidMount() {
        console.log(this.props, this.props.images)
    }

    renderRow = (rowData) => {
        let dir =  getWhatsappStatusDirectory() + '/'  + rowData;
        console.log(dir);
        return (
            <Card>
                <CardItem>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: `file://${dir}` }} style={{height: 160, width: 150, flex: 1}} />
                </CardItem>
                <CardItem>
                    <Body>
                    <Button transparent onPress={() => downloadFiles(dir, rowData)}>
                        <Icon active name="download" />
                        <Text>Save</Text>
                    </Button>
                    </Body>
                </CardItem>
            </Card>
        )
    }

    renderRowData = () => {
        let content = null;
        if (this.state.show) {
            content = (
                <ListView dataSource={ds.cloneWithRows(this.props.images)}
                          renderRow={this.renderRow}
                          enableEmptySections
                          refreshControl={
                              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.refreshList} />
                          }
                />
            );
        } else {
            content = this.renderEmptyRow();
        }
        return content;
    };

    renderEmptyRow = () => {
        let content = null;
        if (this.state.dataSource.length < 1 && this.state.show) {
            content = (
                <Text>No Status Found</Text>
            );
        }
        return content;
    };

    render() {
        return (
            <Container>
                {this.renderRow()}
            </Container>
        )
    }
}