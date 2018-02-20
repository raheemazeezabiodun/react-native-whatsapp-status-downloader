import React, { Component } from 'react';
import { Container, Card, CardItem, Button, Icon, Left, Right, Text, Body, Segment } from 'native-base';
import { connect } from 'react-redux';
import { Image, RefreshControl, ListView, View, StyleSheet, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import RNFetchBlob from 'react-native-fetch-blob';
import VideoPlayer from 'react-native-video-player';

import FAB from '../../components/Fab';
import * as fetchWhatsaappFilesActions from '../../actions/getStatus';
import * as fetchWhatsappVideosActions from '../../actions/videos';
import { getWhatsappStatusDirectory, downloadFiles } from '../../utils/helpers';
import RenderImage from '../../components/RenderImages';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2; } });


class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoSource: ds.cloneWithRows([]),
            show: false,
            refreshing: false,
            videos: false
        }
    }

    componentDidMount() {
        this.props.videoActions.getWhatsappVideos(this.props.statusFiles.files);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.statusFiles) {
            this.setState({ 
                videoSource: ds.cloneWithRows(nextProps.videos.files),
                show: true })
        }
    }
    
    renderVideoRow = (rowData) => {
        let dir =  getWhatsappStatusDirectory() + '/'  + rowData;
        console.log(dir);
        return (
            <Card>
                <CardItem>
                </CardItem>
                <CardItem cardBody>
                <VideoPlayer
                    endWithThumbnail
                    thumbnail={{uri: undefined}}
                    video={{ uri: `file://${dir}` }}
                    customStyles={{flex: 1, height: 160, width: 150}}
                    duration={undefined}
                    ref={r => this.player = r}
                    />
                    <Button
                    onPress={() => this.player.stop()}
                    title="Stop"
                    />
                    <Button
                    onPress={() => this.player.pause()}
                    title="Pause"
                    />
                    <Button
                    onPress={() => this.player.resume()}
                    title="Resume"
                    />
                </CardItem>
                <CardItem>
                    <Body>
                    <Button transparent onPress={() => downloadFiles(dir, rowData)}>
                        <Icon active name="download" size={30} />
                    </Button>
                    </Body>
                </CardItem>
            </Card>
        )
    }

    renderVideoRowData = () => {
        let content = null;
        if (this.state.show) {
            content = (
                <ListView dataSource={this.state.videoSource}
                          renderRow={this.renderVideoRow}
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

    renderVideoEmptyRow = () => {
        let content = null;
        if (this.state.videoSource.length < 1 && this.state.show) {
            content = (
                <Text>No Video Found</Text>
            );
        }
        return content;
    };

    render() {
        return (
            <Container>
                {this.renderVideoRowData()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statusFiles: state.whatsappStatus,
        videos: state.videos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(fetchWhatsaappFilesActions, dispatch),
        videoActions: bindActionCreators(fetchWhatsappVideosActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);

