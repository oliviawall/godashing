import React, { useEffect, useState } from 'react';
import FormInput from './../forms/FormInput';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CountryDropdown } from 'react-country-region-selector';
import { apiInstance } from './../../Utils';

import { selectCartTotal, selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import { clearCart } from './../../redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'react-bootstrap';

import './styles.scss';

const initialAddress = Object.freeze({
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
});

const mapState = createStructuredSelector({
    total: selectCartTotal,
    itemCount: selectCartItemsCount
});

const PaymentDetails = () => {
    const stripe = useStripe();
    const elements = useElements();
    // doesn't like "total" when I comment out, the app stops crashing -->
    // const { total, itemCount } = useSelector(mapState);
    const dispatch = useDispatch();
    const [billingAddress, setBillingAddress] = useState({ ...initialAddress });
    const [recipientName, setRecipientName] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');

    const handleBilling = e => {
        const { name, value } = e.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value
        });
        // setBillingAddress({
        //     ...billingAddress,
        //     [e.target.value]: e.target.value.trim()
        // })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submission', billingAddress)
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        const cardElement = elements.getElement('card');

        if (
            // !shippingAddress.line1 || !shippingAddress.city ||
            // !shippingAddress.state || !shippingAddress.zip_code ||
            // !shippingAddress.country || 
            !billingAddress.line1 ||
            !billingAddress.city || !billingAddress.state ||
            !billingAddress.zip_code || !billingAddress.country ||
            !recipientName || !nameOnCard
        ) {
            return;
        }

        apiInstance.post('/payments/create', {
            amount: 4.99,
            // line above should read amount: total * 100, but crashes app
            // shipping: {
            //     name: recipientName,
            //     address: {
            //         // ...shippingAddress
            //     }
            // }
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
                        dispatch(
                            clearCart()
                        )
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
            <form>
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
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.city}
                        type='text'
                    />
                    <FormInput
                        required
                        placeholder='State'
                        name='state'
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.state}
                        type='text'
                    />
                    <FormInput
                        //validation no more than X number
                        required
                        placeholder="Zip Code"
                        name="zip_code"
                        handleChange={e => handleBilling(e)}
                        value={billingAddress.zip_code}
                        type='text'
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
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </div>
    );
}

export default PaymentDetails;
