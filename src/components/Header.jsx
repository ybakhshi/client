import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginLogout from './LoginLogout';

const Header = (props) => {
    return (

        <nav>
            <div className="nav-wrapper">
                <Link 
                    className="left brand-logo" 
                    to={ props.auth ? '/surveys': '/'}
                >
                     Emaily 
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                   <LoginLogout auth={props.auth} />
                </ul>
            </div>
        </nav>

    );
};

function mapStateToProps(state){
    return {auth: state.auth}
}

export default connect(mapStateToProps)(Header);