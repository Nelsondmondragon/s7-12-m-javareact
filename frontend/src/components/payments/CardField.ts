import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import '../styles/common.css';
import '../styles/2-Card-Detailed.css';

export const CardField = ({ onChange }) => {
  const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#ffff00',
        color: 'red',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '24px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: 'white',
        },
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  };

  return (
    <div className="">
      <div className="FormRow">
        <CardNumberElement options={CARD_OPTIONS} onChange={onChange} />
      </div>
      <div className="FormRow">
        <CardExpiryElement options={CARD_OPTIONS} onChange={onChange} />
      </div>
      <div className="FormRow">
        <CardCvcElement options={CARD_OPTIONS} onChange={onChange} />
      </div>
      {/* <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
      </div> */}
    </div>
  );
};
