import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';//index.js
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent'

//create redux store -> reducers -> actions - actionsType | applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>
                    <Header />
                    <Switch>                        
                        <Route path="/Login" component={Login} exact={true}/>
                        <AuthenticatedComponent>
                            <Route path="/" component={App} exact={true}/>
                        </AuthenticatedComponent>
                    </Switch>
                </div>        
            </LoadingComponent>    
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
