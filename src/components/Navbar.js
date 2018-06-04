import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {

    isActive = (path) => {
        const {location} = this.props.router;
        if(path === 'home' && location.pathname === '/') return true;
        return location.pathname.indexOf(path) !== -1
    };

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className={'navbar-brand'} to={'/'}>15 to go</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className={this.isActive('home') ? 'active' : null}><Link to={'/'}>Home</Link></li>
                        <li className={this.isActive('register') ? 'active': null}><Link to={'register'}>Register</Link></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"/></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"/>
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" className="divider"/>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className={this.isActive('login') ? 'active': null}><Link to={'login'}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

const mapStateToProps = state => ({
    router: state.router
});

export default connect(mapStateToProps, null)(Navbar);
