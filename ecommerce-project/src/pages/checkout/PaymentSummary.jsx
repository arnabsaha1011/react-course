import axios from "axios";
import { useNavigate } from "react-router";
import { formatMoney } from "../../utils/money";

export function PaymentSummary({ paymentSummary, loadCart }) {
  const navigate = useNavigate();

  const createOrder = async() => {
    await axios.post('/api/orders');
    await loadCart();
    navigate('/orders');
  }

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>
      <div className="payment-summary-row">
        <div>Items ({paymentSummary?.totalItems}):</div>
        <div className="payment-summary-money">{paymentSummary?.productCostCents ? formatMoney(paymentSummary.productCostCents) : '$0.00'}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">{paymentSummary?.shippingCostCents ? formatMoney(paymentSummary.shippingCostCents) : '$0.00'}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">{paymentSummary?.totalCostBeforeTaxCents ? formatMoney(paymentSummary.totalCostBeforeTaxCents) : '$0.00'}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">{paymentSummary?.taxCents ? formatMoney(paymentSummary.taxCents) : '$0.00'}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">{paymentSummary?.totalCostCents ? formatMoney(paymentSummary.totalCostCents) : '$0.00'}</div>
      </div>

      <button className="place-order-button button-primary" onClick={createOrder}>
        Place your order
      </button>
    </div>
  );
}