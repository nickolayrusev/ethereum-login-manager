import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../home/index';
import Register from '../register/index';
import Login from '../login/index';
// import Web3 from 'web3';
import Navbar from '../../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
const address = '0xE314023527cd7fb8E9bBD67508580bE9fFfF0C04';
const smartAbiData = '[{"constant":true,"inputs":[],"name":"minEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registeredUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minEther","type":"uint256"}],"name":"setMinEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"ban","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_minEther","type":"uint256"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"},{"indexed":true,"name":"_user","type":"address"}],"name":"NewUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"BanUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"},{"indexed":true,"name":"_user","type":"address"}],"name":"Withdraw","type":"event"}]'

var contract = window.web3.eth.contract(JSON.parse(smartAbiData)).at(address);
contract.minEther((e, r) => console.log(r.c[0]));
window.con = contract;
// window.web3 = web3

// n -> var q = "0x36850a15228cdd9ae4e4700da729809e352f093c2f17ab2364fbcb151ed280442a4ee7e9e2496c4f9ad9714a61a74dbc637e83c0323c1f1e0c7fe8946430441e1b"
// 1. con.register({ value: 1000000, gasPrice: gp, gas: 60000 }, (e,r)=> console.log(r) ) - register account
// 2. web3.eth.sign( web3.eth.accounts[0], web3.sha3( Date.now().toString() ) , (e,r) => console.log(r) ) - login in blog
// 3.


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
                </main>
            </div>
        );
    }
}

export default Index;
