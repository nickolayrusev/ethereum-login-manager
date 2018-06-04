import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { register, fetchMinimumEther } from '../../modules/auth'

class Register extends Component {
    componentWillMount(){
        this.props.fetchMinimumEther()
    }

    render(){
        const {minEther, isLoading} = this.props;
        return <div>
            <h1>Register</h1>
            <p> if you want to register in our app you should give us few ethers ;) </p>
            { isLoading ? <span>...</span> : <input type="number" defaultValue={minEther} step={100} /> }
            <button>register</button>
        </div>
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    minEther : state.auth.minEther
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: (page) => push(page),
            fetchMinimumEther: () => fetchMinimumEther(),
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
