import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { openPost } from '../../../actions/postActions.js';


import exampleImage from '../../../images/example.jpg'

function mapStateToProps(state) {
  return {
      posts: state.posts.posts
  };
}

class FeedCard extends Component {
    constructor(props) {
        super(props);
        this.openPost = this.openPost.bind(this);
    }

    openPost(){
        this.props.dispatch(openPost(this.props.post));
    }

    render(){
        return(
            <Card raised link onClick={this.openPost} className='card'>
                <Image src={exampleImage}
                    label={{className: this.props.post.topic, content: this.props.post.title, ribbon: true }}
                />
                <Card.Content>
                    <Card.Meta>
                        <span className='date'>
                            Posted on {this.props.post.date}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.post.abstract}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default connect(mapStateToProps)(FeedCard)
