import React, { useState } from 'react';
import {
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [cvc, setCvc] = useState('');

  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await stripe.createToken(
      elements.getElement(CardCvcElement),
      {}
    );
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[token]', token);
    }
  };

  console.log(cvc, 'probando');

  return (
    <form onSubmit={handleSubmit}>
      <label>
        CVC
        <CardCvcElement onChange={handleCvcChange} />
      </label>
      <button disabled={!stripe}>Pagar</button>
    </form>
  );
}
