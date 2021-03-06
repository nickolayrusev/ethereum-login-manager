import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout} from "../modules/auth";
import {push} from "react-router-redux";
import {bindActionCreators} from 'redux';

class Navbar extends Component {

    isActive = (path) => {
        const {location} = this.props.router;
        if (path === 'home' && location.pathname === '/') return true;
        return location.pathname.indexOf(path) !== -1
    };

    onLogout = () => {
        logout()
        this.props.changePage('/')
    };

    render() {
        const {isAuthenticated} = this.props;
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className={'navbar-brand'} to={'/'}>Ethereum Login Manager</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className={this.isActive('home') ? 'active' : null}><Link to={'/'}>Home</Link></li>
                        {!isAuthenticated && <li className={this.isActive('register') ? 'active' : null}><Link
                            to={'register'}>Register</Link></li> }
                        <li className={this.isActive('withdraw') ? 'active' : null}><Link
                            to={'withdraw'}>Withdraw</Link></li>
                        <li className={this.isActive('destroy') ? 'active' : null}><Link to={'destroy'}>Destroy</Link>
                        </li>
                        <li className={this.isActive('history') ? 'active' : null}><Link to={'history'}>History</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {!isAuthenticated ?
                            <li className={this.isActive('login') ? 'active' : null}><Link to={'login'}>Login</Link>
                            </li>
                            :
                            <li className={this.isActive('logout') ? 'active' : null}> <a onClick={this.onLogout}>Logout</a>
                            </li>}
                    </ul>
                </div>
            </div>
        </nav>
    }
}

const mapStateToProps = state => ({
    router: state.router,
    isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: (page) => push(page),
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
