import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, logout} from '../actions/userActions';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button class="btn btn-primary" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false" >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>

                        <Link className="navbar-brand" to="/">Diariy2018</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                        {
                            this.props.user === null ? (
                                <li><Link to="/Login">Login</Link></li>Header
                            ) : (
                                <li><Link to="/logout">Logout</Link></li>
                            )
                        }
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user;   
    }
}

export default connect(mapStateToProps, {getUser, logout})(Header);