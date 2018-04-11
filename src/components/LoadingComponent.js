import React, { Component } from 'react';
import { connect } from 'react-redux';
//with withRoute you can get acces to the history object's property
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import { getNotes } from '../actions/notesAction';
import Loading from './Loading';

class LoadingComponent extends Component {
    componentWillMount() {
        const { userLoading, notesLoading } = this.props;
        // if we tried to load the user, load user
        if (userLoading === undefined) {
            this.props.getUser();
        }

        //If we havent tried to get notes, load notes
        if (notesLoading === undefined) {
            this.props.getNotes()
        }
    }

    componentWillReceiveProps(nextProps) {
        //wait for user to get authenticated and try to load notes
        if (nextProps.notesLoading === -1 && nextProps.user !== null) {
            this.props.getNotes();
        }
    }

    render() {
        const { userLoading, notesLoading, children } = this.props;
        if ((!userLoading && !notesLoading) || this.props.user === null) {
            return <div>{children}</div>;
        } else {
            return <Loading />;
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getNotes })(LoadingComponent));