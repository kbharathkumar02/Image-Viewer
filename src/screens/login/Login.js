import React, { Component } from 'react';
import './Login.css';
import LoginHeader from '../../common/LoginHeader';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
// import { common } from '@material-ui/core/colors';
// import PropTypes from  'prop-types';
// import Modal from 'react-modal'
// import { logicalExpression } from '@babel/types';
class Login extends Component {
   
    constructor() {
        super();
        this.state = {
            // modalIsOpen:false
            usernameform: "",
            usernameRequired: "dispNone",
            passwordform: "",
            passwordRequired: "dispNone",
            invalidCredentialsCombination: "dispNone",
            username: "upgrad",
            password: "password",
            access_token :'',
            
        };
        this.routeChange = this.routeChange.bind(this);
    }
    
    routeChange = () =>{
        let path = '/home';
        this.props.history.push(path);
      }
    loginClickHandler = () => {
        this.state.usernameform === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.usernameform === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
        if (this.state.usernameform !== "" && this.state.passwordform !== "") 
        {
            if (this.state.usernameform !== "upgrad" || this.state.passwordform !== "password") {
                this.setState({ invalidCredentialsCombination: "dispBlock" });
            }
            else{
                this.setState({access_token: "14201037960.d08e1df.000d280d097c4ab89330d6713cd1ae0c"});
                sessionStorage.setItem('access_token', this.state.access_token);
                // this.props.history.push('/home');
                this.routeChange();
            }
        }
        else {
            this.setState({ invalidCredentialsCombination: "dispNone" });
        }
    }
    usernameChangedHandler = (event) => {
        this.setState({ usernameform: event.target.value });
    }

    passwordChangedHandler = (event) => {
        this.setState({ passwordform: event.target.value });
    }

    
    render() {
        return (
            <div className="loginPage">
                <div>
                    <LoginHeader />
                </div>
                <div className="loginForm">
                    <Card className="loginCard">
                        <CardContent className="loginCardContent">
                            <br /><br />
                            <Typography className="loginTypography" variant="h4" component="h2">
                                LOGIN
                                </Typography>
                            <br />
                            <FormControl className="formcontrol" required>
                                <InputLabel htmlFor="usernameform">Username</InputLabel>
                                <Input id="usernameform" type="text" usernameform={this.state.usernameform} onChange={this.usernameChangedHandler} />
                                <FormHelperText className={this.state.usernameRequired} >
                                    <span className="loginFormRed">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl className="formcontrol" required>
                                <InputLabel htmlFor="passwordform">Password</InputLabel>
                                <Input id="passwordform" type="text" passwordform={this.state.passwordform} onChange={this.passwordChangedHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="loginFormRed">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormHelperText className={this.state.invalidCredentialsCombination} >
                                <span className="loginFormRed">Incorrect username and/or password</span>
                            </FormHelperText>
                            <br />
                            <Button className="loginFormButton" variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN
                            </Button>
                            <br /><br />
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Login;