import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//     increment,
//     incrementAsync,
//     decrement,
//     decrementAsync
// } from '../../modules/counter';

const Register = () => (
    <div>
        <h1>Register</h1>
    </div>
);

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, null)(Register);
