import React from 'react';
import Payments from './Payments';

const LoginLogout = ({ auth }) => {
    console.log("logoutoo", auth)
    if (auth === null) {
        return;
    } else {
        if(auth){
            return ([
            <li key="1a"><Payments/> </li>,  
            <li key="2a" style={{margin: '0 10px'}}> Credits: {auth.credits} </li>,  
            <li key="3a"><a href="/api/logout"> Logout </a></li>
        ])
        } else {
                return (
                <li><a href="/auth/google"> Login with Google </a></li>
            )
        }

    }
};

export default LoginLogout;