import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I7blbF5FhzJvWx7bXt1VnrjIvfh5cYjJp3qeheQnsuKBfsnKU4qNY4nN95NGg4N2NMqurKyVfwQ8IyC3J0ML9QD00JYizYC2A';
  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Shop LTd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
