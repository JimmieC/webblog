import React, { Component } from 'react';
import './App.css';
import Feed from './components/home/feed/Feed.js'

import { Container, Menu, Grid, Card, Icon, Image, Label, Modal, Button, Header } from 'semantic-ui-react'

class App extends Component {
    constructor(props){
        super(props);
        this.state = { activeItem: 'home' }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state
    return (
      <div className="App">
          <Container>
              <Menu pointing>
                  <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                  <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
              </Menu>
          </Container>
          <Feed />

          </div>
          );
  }
}

export default App;
