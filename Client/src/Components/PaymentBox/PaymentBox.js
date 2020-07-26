import React from "react";
import "./PaymentBox.css";

const PaymentBox = (props) => {
  return (
    <div>
      <form class="payment" onSubmit={props.onPaymentSubmission}>
        <div class="panel panel-default credit-card-box">
          <div class="panel-heading display-table">
            <div class="row display-tr">
              <h3 class="panel-title display-td">Payment Details</h3>
              <img
                class="img-responsive pull-right"
                src="http://i76.imgup.net/accepted_c22e0.png"
              />
            </div>
          </div>
        </div>
        <br />
        <label for="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          size="10"
          class="form-control"
          name="cardNumber"
          placeholder="Valid Card Number"
          autocomplete="cc-number"
          required
          autofocus
        />
        <span class="input-group-addon">
          <i class="fa fa-credit-card"></i>
        </span>
        <label for="cardExpir">EXPIRATION DATE</label>
        <input
          type="text"
          size="5"
          class="form-control"
          name="cardExpiry"
          placeholder="MM / YY"
          autocomplete="cc-exp"
          required
        />
        <label for="cardCVC">CV CODE</label>
        <input
          type="text"
          size="3"
          class="form-control"
          name="cardCVC"
          placeholder="CVC"
          autocomplete="cc-csc"
          required
        />
        <br />
        <label for="Amount">Amount</label>
        <input
          type="text"
          size="3"
          class="form-control"
          name="Amount"
          value={props.paymentDetails.Amount}
        />
        <br />
        <button class="blueButton" type="submit">
          Confirm Payment
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default PaymentBox;
