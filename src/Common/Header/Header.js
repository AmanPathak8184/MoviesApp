import React, { Component } from 'react';
import './Header.css';

//SVG Imports
import logo from '../../Assets/logo.svg';

// Material UI Imports
import { Tab, Typography, Button, Tabs, FormControl, InputLabel, Input } from '@material-ui/core';

// Other Imports

import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabStyle = {
    padding: 0,

}

const TabContainer = function (props) {
    return (
        <div>

            <Typography component="div" style={TabStyle} >

                {props.children}

            </Typography>

        </div>
    )
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0
        };
    }

    openModalHandler = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            isModalOpen: false
        })
    }

    tabChangeHandler = (event, newValue) => {

        this.setState({
            value: newValue
        })

        console.log("New Value IS " + newValue);
        console.log("State Value IS " + this.state.value);
    }

    render() {
        return (
            <div className="Header">

                <img src={logo} className="Logo" alt="logo" />

                <div className="LoginButton">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>

                        Login

                    </Button>
                </div>


                <Modal ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >

                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    
                    <TabContainer>

                        <FormControl required>
                            <InputLabel htmlFor="userName"> Username </InputLabel>
                            <Input id="username" type='text' />

                        </FormControl>

                        <br />
                        <br />

                        <FormControl required>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input id="password" type='password' />

                        </FormControl>

                    </TabContainer>

                </Modal>


            </div>
        )
    }
}

export default Header;