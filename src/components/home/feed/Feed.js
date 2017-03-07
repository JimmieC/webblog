import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

import FeedCard from './FeedCard.js';
import FeedPost from './FeedPost.js'
import './Feed.css'


function mapStateToProps(state) {
  return {
      posts: state.posts.posts,
      activePost: state.activePost
  };
}

class Feed extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Container className='feed'>
                <Card.Group itemsPerRow='2'>
                    {this.props.posts.map((post) => {
                        return <FeedCard post={post}/>
                    }, this) }
                </Card.Group>
                <FeedPost />
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Feed);
