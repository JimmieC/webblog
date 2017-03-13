import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

class MenuBar extends Component {
    constructor(props){
        super(props);
        this.state = { activeItem: 'home' }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return(
            <Container>
                <Menu pointing>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                </Menu>
            </Container>
        )
    }
}

export default MenuBar
