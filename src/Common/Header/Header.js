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
            userNameRequired: "displayNone",
            password: "",
            passwordRequired: "displayNone",

            // Register Form State Variables

            firstName: "",
            firstNameRequired: "displayNone",

            lastName: "",
            lastNameRequired: "displayNone",

            email: "",
            emailRequired: "displayNone",

            registerPassword: "",
            registerPasswordRequired: "displayNone",

            contactNumber: "",
            contactNumberRequired: "displayNone"


        };
    }

    //#region Login Modal & Tab

    openModalHandler = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            isModalOpen: false,
            userNameRequired: "displayNone",
            passwordRequired: "displayNone",

            username: "",
            password: "",


            firstNameRequired: "displayNone",
            lastNameRequired: "displayNone",
            emailRequired: "displayNone",
            registerPasswordRequired: "displayNone",
            contactNumberRequired: "displayNone",

            firstName: "",
            lastName: "",
            email: "",
            registerPassword: "",
            contactNumber: "",

            value: 0
        })
    }

    tabChangeHandler = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }

    //#endregion

    //#region Login Form Functions

    loginClickHandler = () => {
        this.state.username === "" ?
            this.setState({ userNameRequired: "displayBlock" }) : this.setState({ userNameRequired: "displayNone" });

        this.state.password === "" ?
            this.setState({ passwordRequired: "displayBlock" }) : this.setState({ passwordRequired: "displayNone" });

    }

    inputUsernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    //#endregion

    //#region Register Form Functions

    inputFirstNameChangeHandler = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    inputLastNameChangeHandler = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    inputEmailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({
            registerPassword: e.target.value
        })
    }

    inputContactNumberChangeHandler = (e) => {
        this.setState({
            contactNumber: e.target.value
        })
    }

    RegisterClickHandler = () => {
        this.state.firstName === "" ?
            this.setState({ firstNameRequired: "displayBlock" }) : this.setState({ firstNameRequired: "displayNone" });

        this.state.lastName === "" ?
            this.setState({ lastNameRequired: "displayBlock" }) : this.setState({ lastNameRequired: "displayNone" });

        this.state.email === "" ?
            this.setState({ emailRequired: "displayBlock" }) : this.setState({ emailRequired: "displayNone" });

        this.state.registerPassword === "" ?
            this.setState({ registerPasswordRequired: "displayBlock" }) : this.setState({ registerPasswordRequired: "displayNone" });

        this.state.contactNumber === "" ?
            this.setState({ contactNumberRequired: "displayBlock" }) : this.setState({ contactNumberRequired: "displayNone" });
    }

    //#endregion

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
                                <Input id="password" type='password' className={this.state.password}
                                    onChange={this.inputPasswordChangeHandler} />

                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red"> Required</span>
                                </FormHelperText>

                            </FormControl> <br /> <br />

                            <Button variant="contained" color="primary" type='submit' onClick={this.loginClickHandler}>
                                Login
                            </Button>

                        </TabContainer>
                    }




                    {this.state.value === 1 &&
                        <TabContainer>

                            {/* FirstName */}

                            <FormControl required>
                                <InputLabel htmlFor="firstName"> First Name </InputLabel>
                                <Input id="firstName" type='text' className={this.state.firstName}
                                    onChange={this.inputFirstNameChangeHandler}
                                />

                                <FormHelperText className={this.state.firstNameRequired}>
                                    <span className="red"> Required </span>
                                </FormHelperText>
                            </FormControl> <br /><br />

                            {/* LastName */}

                            <FormControl required>
                                <InputLabel htmlFor="lastName"> Last Name </InputLabel>
                                <Input id="lastName" type='text' className={this.state.lastName}
                                    onChange={this.inputLastNameChangeHandler} />

                                <FormHelperText className={this.state.lastNameRequired}>
                                    <span className="red"> Required </span>
                                </FormHelperText>
                            </FormControl> <br /><br />

                            {/* Email */}

                            <FormControl required>
                                <InputLabel htmlFor="email"> Email </InputLabel>
                                <Input id="email" type='email' className={this.state.email}
                                    onChange={this.inputEmailChangeHandler} />

                                <FormHelperText className={this.state.emailRequired}>
                                    <span className="red"> Required </span>
                                </FormHelperText>
                            </FormControl> <br /><br />

                            {/* Password */}

                            <FormControl required>
                                <InputLabel htmlFor="Password"> Password </InputLabel>
                                <Input id="Password" type='Password' className={this.state.registerPassword}
                                    onChange={this.inputRegisterPasswordChangeHandler} />

                                <FormHelperText className={this.state.registerPasswordRequired}>
                                    <span className="red"> Required </span>
                                </FormHelperText>
                            </FormControl> <br /><br />

                            {/* Contact Number */}

                            <FormControl required>
                                <InputLabel htmlFor="contactNumber"> Contact Number </InputLabel>
                                <Input id="contactNumber" type='number' className={this.state.contactNumber}
                                    onChange={this.inputContactNumberChangeHandler} />

                                <FormHelperText className={this.state.contactNumberRequired}>
                                    <span className="red"> Required </span>
                                </FormHelperText>
                            </FormControl> <br /><br />

                            <Button variant="contained" color="primary" type='submit' onClick={this.RegisterClickHandler}>
                                Register
                            </Button>

                        </TabContainer>
                    }

                </Modal>


            </div>
        )
    }
}

export default Header;