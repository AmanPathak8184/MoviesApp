import React, { Component } from 'react';
import './Header.css';

//SVG Imports
import logo from '../../Assets/logo.svg';

// Material UI Imports
import { Tab, Typography, Button, Tabs, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

// Other Imports

import Modal from 'react-modal';

import PropTypes from 'prop-types';





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


//#region  Tab Container

const TabStyle = {
    padding: 0
}

const TabContainer = function (props) {
    return (
        <div>
            <Typography component="div" style={TabStyle} align='center'>
                {props.children}
            </Typography>
        </div>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

//#endregion


class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0,
            username: "",
            userNameRequired: "displayNone"
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
    }

    loginClickHandler = () => {
        this.state.username === "" ?
            this.setState({ userNameRequired: "displayBlock" }) : this.setState({ userNameRequired: "displayNone" })
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
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

                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>

                    {this.state.value === 0 &&
                        <TabContainer>

                            <FormControl required>
                                
                                <InputLabel htmlFor="userName"> Username </InputLabel>

                                <Input id="username" type='text' className={this.state.username}
                                    onChange={this.inputUsernameChangeHandler} />

                                <FormHelperText className={this.state.userNameRequired}>
                                    <span className="red"> Required </span>
                                </FormHelperText>

                            </FormControl> <br /><br />

                            <FormControl required>
                                <InputLabel htmlFor="password"> Password </InputLabel>
                                <Input id="password" type='password' />

                            </FormControl> <br /> <br />

                            <Button variant="contained" color="primary" type='submit' onClick={this.loginClickHandler}>
                                Login
                            </Button>

                        </TabContainer>
                    }


                    {this.state.value === 1 &&
                        <TabContainer>

                            <FormControl required>
                                <InputLabel htmlFor="name"> Name </InputLabel>
                                <Input id="name" type='text' />

                            </FormControl>

                            <br />
                            <br />

                            <FormControl required>
                                <InputLabel htmlFor="Email"> Email </InputLabel>
                                <Input id="Email" type='email' />

                            </FormControl> <br /> <br />

                            <Button variant="contained" color="primary" type='submit'> Register</Button>

                        </TabContainer>
                    }

                </Modal>


            </div>
        )
    }
}

export default Header;