import React, { Component } from 'react';

class Home extends Component {
render() {
    const {access_token} = this.props
    // console.log(sessionStorage.getItem('access_token'));
    return (
        <div>This is home page</div>
    )
 }
}

export default Home;