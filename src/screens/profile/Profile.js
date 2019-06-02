import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

    constructor() {
        super();
        this.state =
            {
                accessToken: sessionStorage.getItem('access_token')
            }
        this.routeChangeToLogin = this.routeChangeToLogin.bind(this);
    }

    routeChangeToLogin = () => {
        let path = '/home';
        this.props.history.push(path);
    }

    componentWillMount() {

        if (this.state.accessToken === null || this.state.accessToken === "") {
            this.routeChangeToLogin();
        }
    }

    render() {
        if (this.state.accessToken === null || this.state.accessToken === "") {
            this.routeChangeToLogin();
        }
        return (
            <div>This is profile page </div>
        )
    }
}

export default Profile;