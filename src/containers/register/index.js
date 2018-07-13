import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {register, fetchMinimumEther} from '../../modules/auth'
import web3 from '../../services/web3';

class Register extends Component {
    constructor(props) {
        super(props);
        this.onRegister = this.onRegister.bind(this);
    }

    onRegister() {
        const {register} = this.props;
        const ethValueInWei = this.minEtherInput.value
        // console.log('eth val in wei ', web3.toWei( ethValueInWei ))
        register(web3.toWei( ethValueInWei ))
    }

    componentWillReceiveProps(newProps){
        if(newProps.isAuthenticated){
            this.props.changePage('/')
        }
    }

    componentWillMount() {
        this.props.fetchMinimumEther()
    }

    render() {
        const {minEther, isLoading} = this.props;
        return <div>
            <h1>Register</h1>
            <p> if you want to register in our app you should give us few ethers ;) </p>
            {isLoading ? <span>...</span> : <input type="number" ref={(minEther) => this.minEtherInput = minEther} defaultValue={minEther} step={0.1}/>}
            <button onClick={this.onRegister}>register</button>
        </div>
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    minEther: state.auth.minEther,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: (page) => push(page),
            fetchMinimumEther: () => fetchMinimumEther(),
            register: (value) => register(value)
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
