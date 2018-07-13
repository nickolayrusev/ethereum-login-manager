import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteMyData} from '../../modules/auth'
import web3 from '../../services/web3';

class Destroy extends Component {
    constructor(props) {
        super(props);
        this.onDestroy = this.onDestroy.bind(this)
    }

    componentWillMount() {
    }

    onDestroy () {
        this.props.deleteMyData()
    }

    render() {
        return <div>
            <h1>Destroy</h1>
            <button onClick={this.onDestroy}>Destroy my GDPR data :)</button>
        </div>
    }
}

const mapStateToProps = state => ({
    // isLoading: state.auth.isLoading,
    // isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: (page) => push(page),
            deleteMyData: () => deleteMyData()
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Destroy);
