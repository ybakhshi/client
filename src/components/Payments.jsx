import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../actions';
import { connect } from 'react-redux';

const Payments = (props) => {
    return (
        <StripeCheckout 
            name="Emaily"
            description='$5 for 5 email credits'
            amount={500}
            token={ token => props.handleToken(token)} 
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">Add Credits</button>
        </StripeCheckout>
    );
};

export default connect(null, actions)(Payments);