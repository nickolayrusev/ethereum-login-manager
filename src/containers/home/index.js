import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Blog from '../../components/Blog'
// import {
//     increment,
//     incrementAsync,
//     decrement,
//     decrementAsync
// } from '../../modules/counter';

const Home = props => (
    <div>
        <h1>Home</h1>
        <Blog/>
    </div>
);

const mapStateToProps = state => ({
    // count: state.counter.count,
    // isIncrementing: state.counter.isIncrementing,
    // isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/about-us')
        },
        dispatch
    );

export default connect(mapStateToProps, null)(Home);
