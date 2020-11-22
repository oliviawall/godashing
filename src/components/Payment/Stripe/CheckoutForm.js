// import React, { useState } from "react";
// import styled from "@emotion/styled";
// import axios from "axios";

// import Row from "../../../prebuilt/Row";
// import BillingDetailsFields from "../../../prebuilt/BillingDetailsFields";
// import SubmitButton from "../../../prebuilt/SubmitButton";
// import CheckoutError from "../../../prebuilt/CheckoutError";
// import { loadStripe } from "@stripe/stripe-js";

// import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";

// const CardElementContainer =  styled.div`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   & .StripeElement {
//     width: 100%;
//     padding: 15px;
//   }
// `;
// const stripePromise = loadStripe('someId');

// // const Wrapper = props => {
// //   <Elements stripe={stripePromise}>
// //     <CheckoutForm price={price} onSuccessfulCheckout={onSuccessfulCheckout} />
// //   </Elements>
// // }

// const CheckoutFormElements = ({ price, onSuccessfulCheckout }) => {
//   const [isProcessing, setProcessingTo] = useState(false);
//   const [checkoutError, setCheckoutError] = useState();

//   const stripe = useStripe();
//   const elements = useElements();

//   // TIP
//   // use the cardElements onChange prop to add a handler
//   // for setting any errors:

//   const handleCardDetailsChange = ev => {
//     ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
//   };

//   const handleFormSubmit = async ev => {
//     ev.preventDefault();

//     const billingDetails = {
//       name: ev.target.name.value,
//       email: ev.target.email.value,
//       address: {
//         city: ev.target.city.value,
//         line1: ev.target.address.value,
//         state: ev.target.state.value,
//         postal_code: ev.target.zip.value
//       }
//     };

//     setProcessingTo(true);

//     const cardElement = elements.getElement("card");

//     try {
//       const { data: clientSecret } = await axios.post("/api/payment_intents", {
//         amount: price * 100
//       });

//       const paymentMethodReq = await stripe.createPaymentMethod({
//         type: "card",
//         card: cardElement,
//         billing_details: billingDetails
//       });

//       if (paymentMethodReq.error) {
//         setCheckoutError(paymentMethodReq.error.message);
//         setProcessingTo(false);
//         return;
//       }

//       const { error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: paymentMethodReq.paymentMethod.id
//       });

//       if (error) {
//         setCheckoutError(error.message);
//         setProcessingTo(false);
//         return;
//       }

//       onSuccessfulCheckout();
//     } catch (err) {
//       setCheckoutError(err.message);
//     }
//   };

//   // Learning
//   // A common ask/bug that users run into is:
//   // How do you change the color of the card element input text?
//   // How do you change the font-size of the card element input text?
//   // How do you change the placeholder color?
//   // The answer to all of the above is to use the `style` option.
//   // It's common to hear users confused why the card element appears impervious
//   // to all their styles. No matter what classes they add to the parent element
//   // nothing within the card element seems to change. The reason for this is that
//   // the card element is housed within an iframe and:
//   // > styles do not cascade from a parent window down into its iframes

//   const iframeStyles = {
//     base: {
//       color: "#fff",
//       fontSize: "16px",
//       iconColor: "#fff",
//       "::placeholder": {
//         color: "#87bbfd"
//       }
//     },
//     invalid: {
//       iconColor: "#FFC7EE",
//       color: "#FFC7EE"
//     },
//     complete: {
//       iconColor: "#cbf4c9"
//     }
//   };

//   const cardElementOpts = {
//     iconStyle: "solid",
//     style: iframeStyles,
//     hidePostalCode: true
//   };

//   return (
  
//     <form onSubmit={handleFormSubmit}>
//       <Row>
//         <BillingDetailsFields />
//       </Row>
//       <Row>
//         <Elements stripe={stripePromise}>
//         <CardElementContainer>
//           <CardElement
//             options={cardElementOpts}
//             onChange={handleCardDetailsChange}
//           />
//         </CardElementContainer>
//      </Elements>
//       </Row>
//       {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
//       <Row>
//         {/* TIP always disable your submit button while processing payments */}
//         <SubmitButton disabled={isProcessing || !stripe}>
//           {isProcessing ? "Processing..." : `Pay $${price}`}
//         </SubmitButton>
//       </Row>
//     </form>
//   );
// };

// const CheckoutForm = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutFormElements />
//     </Elements>
//   )
// }
// export default CheckoutForm;
