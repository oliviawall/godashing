import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
import { apiInstance } from './../../Utils';
import { selectCartTotal } from './../../redux/Cart/cart.selectors';
import { clearCart } from './../../redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const initialAddress = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
};

const mapState = createStructuredSelector({
    total: selectCartTotal
});

const PaymentDetails = () => {
    const stripe = useStripe();
    const elements = useElements();
    // doesn't like "total" when I comment out, the app stops crashing -->
    // const { total } = useSelector();
    const dispatch = useDispatch();
    const [billingAddress, setBillingAddress] = useState({ ...initialAddress });
    const [shippingAddress, setShippingAddress] = useState({ ...initialAddress });
    const [recipientName, setRecipientName] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');

    const handleShipping = e => {
        const { name, value } = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value
        });
    };

    const handleBilling = e => {
        const { name, value } = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value
        });
    };


    const handleFormSubmit = async e => {
        e.preventDefault();
        const cardElement = elements.getElement('card');

        if (
            !shippingAddress.line1 || !shippingAddress.city ||
            !shippingAddress.state || !shippingAddress.zip_code ||
            !shippingAddress.country || !billingAddress.line1 ||
            !billingAddress.city || !billingAddress.state ||
            !billingAddress.zip_code || !billingAddress.country ||
            !recipientName || !nameOnCard
        ) {
            return;
        }

        apiInstance.post('/payments/create', {
            amount: 4.99,
            // line above should read amount: total * 100, but crashes app
            shipping: {
                name: recipientName,
                address: {
                    ...shippingAddress
                }
            }
        }).then(({ data: clientSecret }) => {

            stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: nameOnCard,
                    address: {
                        ...billingAddress
                    }
                }
            }).then(({ paymentMethod }) => {
                
                stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id
                })
                    .then(({ paymentIntent }) => {
                        console.log(paymentIntent)
                    });

            })

        });

    };

    const configCardElement = {
        iconStyle: 'solid',
        style: {
            base: {
                fontSize: '16px'
            }
        },
        hidePostalCode: true
    };

    return (
        <div className='paymentDetails'>
            <form onSubmit={handleFormSubmit}>

                <div className='group'>
                    <h2>
                        Shipping Address
                    </h2>

                    <FormInput
                        required
                        placeholder='Recipient Name'
                        name='recipientName'
                        handleChange={e => setRecipientName(e.target.value)}
                        value={recipientName}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder='Line 1'
                        name='line1'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.line1}
                        type='text'
                    />
                    <FormInput
                        placeholder='Line 2'
                        name='line2'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.line2}
                        type='text'
                    />

                    <FormInput
                        required
                        placeholder='City'
                        name='city'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.city}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder='State'
                        name='state'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.state}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder="Zip Code"
                        name="zip_code"
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.zip_code}
                        type="text"
                    />
                    <div className='formRow checkoutInput'>
                        <CountryDropdown
                            required
                            onChange={val => handleShipping({
                                target: {
                                    name: 'country',
                                    value: val
                                }
                            })}
                            name='country'
                            value={shippingAddress.country}
                            valueType='short'
                        />
                    </div>

                </div>

                <div className='group'>
                    <h2>
                        Billing Details
                    </h2>
                    <FormInput
                        required
                        placeholder='Name on Card'
                        name='nameOnCard'
                        handleChange={e => setNameOnCard(e.target.value)}
                        value={nameOnCard}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder='Line 1'
                        name='line1'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.line1}
                        type='text'
                    />
                    <FormInput
                        placeholder='Line 2'
                        name='line2'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.line2}
                        type='text'
                    />

                    <FormInput
                        required
                        placeholder='City'
                        name='city'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.city}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder='State'
                        name='state'
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.state}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder="Zip Code"
                        name="zip_code"
                        handleChange={e => handleShipping(e)}
                        value={shippingAddress.zip_code}
                        type="text"
                    />
                    <div className='formRow checkoutInput'>
                        <CountryDropdown
                            required
                            onChange={val => handleBilling({
                                target: {
                                    name: 'country',
                                    value: val
                                }
                            })}
                            name='country'
                            value={billingAddress.country}
                            valueType='short'
                        />
                    </div>
                </div>

                <div className='group'>
                    <h2>
                        Card Details
                    </h2>
                    <CardElement
                        options={configCardElement}
                    />
                </div>

                <Button
                    type='submit'
                >
                    Pay Now
                </Button>
            </form>
        </div>
    );
}

export default PaymentDetails;
