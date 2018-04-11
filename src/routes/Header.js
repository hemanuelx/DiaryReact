import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userActions';

class Header extends Component {
    render() {
        return (            
            <nav className="navbar navbar-expand-ls navbar-light bg-light">
                <div className="container-fluid">
                    <button href="#myNavbar" className="navbar-toggler" type="button" data-toggle="collapse"
                        aria-controls="myNavbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand" to="/">Diariy2018</Link>
                </div>
                <div className="collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        {
                            this.props.user === null ? (
                                <li><Link to="/Login">Login</Link></li>
                            ) : (
                                    <li><Link to="/logout" onClick={() => this.props.logout()}>Logout</Link></li>
                                )
                        }
                    </ul>
                </div>
            </nav>            
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser, logout })(Header);