import React, { Component } from 'react';
import {connect} from 'react-redux';
import {googleLogin, twitterLogin} from '../actions/userActions';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div class="row text-center">
                    <div className="col-sm 12 jumbotron" style={{marginTop: '10px'}}>
                        <h1>Login whith your favorite <b>Social Network</b></h1>
                    </div>
                    <div class="col-sm-6">
                        <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>
                            Login with Google
                        </button>                        
                    </div>
                    <br />
                    <div class="col-sm-6">
                        <button className="btn btn-success btn-lg" onClick={this.props.twitterLogin}>
                            Login with Twitter
                        </button>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {googleLogin, twitterLogin}) (Login);