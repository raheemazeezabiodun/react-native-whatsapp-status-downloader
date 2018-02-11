import React, { Component } from 'react';
import { Container, Card, CardItem, Button, Icon, Left, Right, Text, Body, Segment } from 'native-base';
import { connect } from 'react-redux';
import { Image, RefreshControl, ListView, View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import RNFetchBlob from 'react-native-fetch-blob';
import Video from 'react-native-video';

import FAB from '../../components/Fab';
import * as fetchWhatsaappFilesActions from '../../actions/getStatus';
import * as fetchWhatsappImagesActions from '../../actions/images';
import { getWhatsappStatusDirectory, downloadFiles } from '../../utils/helpers';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2; } });


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            show: false,
            refreshing: false,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
        }
    }


    componentDidMount() {
        this.props.imageActions.getWhatsappImages(this.props.statusFiles.files);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.statusFiles) {
            this.setState({ dataSource: ds.cloneWithRows(nextProps.images.files), show: true })
        }
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
                <ListView dataSource={this.state.dataSource}
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
                <Segment>
                    <Button first>
                        <Text>Images</Text>
                    </Button>
                    <Button>
                        <Text>Videos</Text>
                    </Button>
                </Segment>
                {this.renderRowData()}
                <FAB />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statusFiles: state.whatsappStatus,
        images: state.images
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        imageActions: bindActionCreators(fetchWhatsappImagesActions, dispatch),
        actions: bindActionCreators(fetchWhatsaappFilesActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

