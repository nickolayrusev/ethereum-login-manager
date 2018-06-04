import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../home/index';
import Register from '../register/index';
// import Web3 from 'web3';
import Navbar from '../../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import utils from 'ethereumjs-util';

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

const getAddress = (msg, sig) => {
    // const r = utils.toBuffer('0x' + sgn.slice(0,66))
    // const s = utils.toBuffer('0x' + sgn.slice(66,130))
    // const v = utils.toBuffer('0x' + sgn.slice(130,132))
    const m = prefixSignMessage(msg)
    // console.log("v is ", v)
    // const pub = utils.ecrecover(m, v, r, s)
    // return '0x' + utils.pubToAddress(pub).toString('hex')

    console.log('m ', m)
    const res = utils.fromRpcSig(sig)
    console.log('res is ', res)
    const pub = utils.ecrecover(m, res.v, res.r, res.s);
    console.log('pyb is ', pub)
    return '0x' + utils.pubToAddress(pub).toString('hex');
};
window.getAddress = getAddress;

const prefixSignMessage = (msg) => {
    const prefix = new Buffer("\x19Ethereum Signed Message:\n");
    const result = Buffer.concat([prefix, new Buffer(String(msg.length)), new Buffer(msg)])
    console.log('resulting buffer is ', result)
    return utils.sha3(result);
};

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
                </main>
            </div>
        );
    }
}

export default Index;
