import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, logout} from '../actions/userActions';

class Header extends Component {
    render() {
        return (
            <div class="container-fluid">
            <nav class="navbar navbar-expand-ls navbar-light bg-light">
                <div className="container-fluid">                    
                        <button class="navbar-toggler" type="button" data-toggle="collapse" 
                                data-target="#myNavbar" aria-controls="myNavbar" 
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>

                        <Link className="navbar-brand" to="/">Diariy2018</Link>
                    </div>                                    
            </nav>            
            <div className="collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                {
                    this.props.user === null ? (
                        <li><Link to="/Login">Login</Link></li>
                    ) : (
                        <li><Link to="/logout">Logout</Link></li>
                    )
                }                            
                </ul>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser, logout})(Header);