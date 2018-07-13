import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../home/index';
import Register from '../register/index';
import Login from '../login/index';
import Navbar from '../../components/Navbar'
import Withdraw from '../withdraw/index';
import Destroy from '../destroy/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Index extends Component {

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <Navbar/>
                </header>
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/withdraw" component={Withdraw}/>
                    <Route exact path="/destroy" component={Destroy}/>
                </main>
            </div>
        );
    }
}

export default Index;
