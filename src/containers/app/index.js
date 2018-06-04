import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home/index';
import Register from '../register/index';
import Web3 from 'web3';
import Navbar from '../../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// const web3 = new Web3(Web3.givenProvider || "http://osb.vlasath.org:5689/");
// var contract = new web3.eth.Contract(JSON.parse('[{"constant":true,"inputs":[],"name":"minEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registeredUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minEther","type":"uint256"}],"name":"setMinEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"ban","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_minEther","type":"uint256"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"}]'), '0x869d64C3C6105De2f559EB243fB8079e53ce0dA6');
// contract.methods.minEther().call().then(console.log).catch(e=>console.error(e));

class Index extends Component {

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <Navbar/>
                </header>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                </main>
            </div>
        );
    }
}

export default Index;
