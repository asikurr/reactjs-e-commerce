import React from 'react';
import StripeCheckout from "react-stripe-checkout";

import shopLogo from "../../asset/shop.svg"

const StripePaymentButton = ({price}) => {
    const stripeForPayment = price * 100;
    const publishAbleKey  = 'pk_test_FfAOm8Pl0nHG7lorvQjdnMuH008kblWMmd';

    const onToken = (token) => {
        console.log(token);
        alert("Payment was Successful. Thank You !");
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name ='E-commerce Website'
            billingAddress
            shippingAddress
            image={shopLogo}
            description={`Your total is $ ${price}`}
            amount={stripeForPayment}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishAbleKey}
        />
    );
};

export default StripePaymentButton;