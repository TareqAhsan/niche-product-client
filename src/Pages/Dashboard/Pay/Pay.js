import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";
import { Container } from "react-bootstrap";

const stripePromise = loadStripe(
  "pk_test_51JvpkABU3D6PI3NFkuDC9rCpFVrWoPaUFtsrgfS546C9DH7OefGFFN8JVRQF6if1EZ4Nb225YfvVYpYdFYfIMihm00zlD1PIUY"
);
const Pay = () => {
  const { purchaseid } = useParams();
  const [paymentinfo, setPaymentinfo] = useState();

  useEffect(() => {
    axios(`https://fast-ravine-78519.herokuapp.com/orders/${purchaseid}`).then(
      (result) => setPaymentinfo(result.data)
    );
  }, [purchaseid]);
  return (
    <div>
      <Container>
        <h2 className="display-6 my-4">
          pay for {paymentinfo?.brand} model {paymentinfo?.model}
        </h2>
        <p className="fs-5">Pay ${paymentinfo?.price}</p>
        {paymentinfo?.price && (
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentinfo={paymentinfo} />
          </Elements>
        )}
      </Container>
    </div>
  );
};

export default Pay;
