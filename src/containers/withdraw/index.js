import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withdraw} from '../../modules/auth'
import web3 from '../../services/web3';

class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.onWithdraw = this.onWithdraw.bind(this)
    }

    componentWillMount() {
    }

    onWithdraw () {
        this.props.withdraw()
    }

    render() {
        return <div>
            <h1>Withdraw</h1>
            <button onClick={this.onWithdraw}>Withdraw your deposit</button>
        </div>
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: (page) => push(page),
            withdraw: () => withdraw()
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
