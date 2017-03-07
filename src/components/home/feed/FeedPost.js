import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon, Header, Image, Label } from 'semantic-ui-react';
import './Feed.css'
import { closePost } from '../../../actions/postActions.js';

import exampleImage from '../../../images/example.jpg'

function mapStateToProps(state) {
  return {
      open: state.posts.activePost.open,
      content: state.posts.activePost.content
  };
}

class FeedPost extends Component {
    constructor(props) {
        super(props);
        this.closePost = this.closePost.bind(this);
    }

    closePost(){
        this.props.dispatch(closePost());
    }

    render(){
        console.log(this.props);

        return(
            <Modal open={this.props.open} dimmer='blurring'>
                <Modal.Header>{this.props.content.title}
                    <Label className={'feedPostHeaderLabel ' + this.props.content.topic}>Written by {this.props.content.author}</Label>
                </Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={exampleImage} />
                    <Modal.Description>
                        {this.props.content.body}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={this.closePost}>
                        Close <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default connect(mapStateToProps)(FeedPost)
