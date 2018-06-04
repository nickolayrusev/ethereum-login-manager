import React, {Component} from 'react';
import {connect} from 'react-redux';
import utils from 'ethereumjs-util';

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
    return utils.bufferToHex(utils.pubToAddress(pub));
};
const name = 'nickolaynickolaynickolaynickolay';
const msg = Buffer.from(name)

const prefixSignMessage = (msg) => {
    const prefix = new Buffer("\x19Ethereum Signed Message:\n");
    const result = Buffer.concat([prefix, new Buffer(String(msg.length)), msg])
    console.log('resulting buffer is ', result)
    return utils.sha3(result);
};


class Login extends Component {
    constructor(props) {
        super(props)
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        let web3 = window.web3;
        console.log(msg)
        //1. signing
        web3.eth.sign(web3.eth.accounts[0], '0x' + msg.toString('hex'), this.onLoginResponse)
    }

    onLoginResponse(err, res) {
        console.log('res is ', res)
        console.log('msg is ', msg)
        console.log(getAddress(msg, res))
    }

    render() {
        return <div>
            <h1>Login</h1>
            <button onClick={this.onLogin}>click me</button>
        </div>
    }
}


const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(Login);
