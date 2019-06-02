import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            "access_token": sessionStorage.getItem('access_token')
        }
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange = () =>{
        let path = '/';
        this.props.history.push(path);
      }

    render() {
        // console.log("this.state.access_token := "+ this.state.access_token);
        if (this.state.access_token === null || this.state.access_token === "") {
            this.routeChange();
        }
        return (
            <div>This is home page</div>
        )
    }
}

export default Home;