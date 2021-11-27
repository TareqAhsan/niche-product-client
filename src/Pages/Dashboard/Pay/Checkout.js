import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";
const CheckoutForm = ({ paymentinfo }) => {
  const { price, name, email, _id } = paymentinfo;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("https://fast-ravine-78519.herokuapp.com/create-payment-intent", {
        price,
      })
      .then((result) => setClientSecret(result.data.clientSecret));
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    //payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentIntent);

      setSuccess("successfully paid");
      setProcessing(false);
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.last4,
        transaction: paymentIntent.client_secret.split("_secret")[0],
      };
      axios
        .put(`https://fast-ravine-78519.herokuapp.com/orders/${_id}`, payment)
        .then((result) => console.log(result.data));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <Spinner animation="border" variant="primary"></Spinner>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay ${price}
          </button>
        )}
      </form>
      {error && (
        <Alert variant="danger" className="my-4">
          {error}
        </Alert>
      )}
      {success && (
        <Alert variant="success" className="my-4">
          {success}
        </Alert>
      )}
    </div>
  );
};

export default CheckoutForm;
