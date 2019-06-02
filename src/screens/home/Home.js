import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            accessToken: sessionStorage.getItem('access_token')
        }
        this.routeChangeToLogin = this.routeChangeToLogin.bind(this);
    }
    routeChangeToLogin = () =>{
        let path = '/';
        this.props.history.push(path);
      }

    render() {
        // console.log("this.state.access_token := "+ this.state.accessToken);
        if (this.state.accessToken === null || this.state.accessToken === "") {
            this.routeChangeToLogin();
        }
        return (
            <div>This is home page</div>
        )
    }
}

export default Home;