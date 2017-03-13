import React, { Component } from 'react';
import './App.css';

import { Header, Icon, Image } from 'semantic-ui-react';

import Feed from './components/home/feed/Feed'
import MenuBar from './components/menu/MenuBar'

class App extends Component {
    constructor(props){
        super(props);
        this.state = { activeItem: 'home' }
    }


  render() {
    return (
        <div className="App">

            <div className='header'>
                <Header as='h1' icon textAlign='center'>
                    <Header.Content>
                        Wonderful Japan
                        <Header.Subheader>
                            A collection of Japanese information and stories
                        </Header.Subheader>
                    </Header.Content>
                </Header>

            </div>

            <MenuBar />

            <Feed />

        </div>
    );
  }
}

export default App;
