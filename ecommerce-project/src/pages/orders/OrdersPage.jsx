import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '../../components/Header.jsx'
import { Link } from 'react-router';
import { convertTimeToDate } from '../../utils/time.js'
import { formatMoney } from '../../utils/money.js';
import { addToCart } from '../../utils/cart.js';
import BuyAgain from '../../assets/images/icons/buy-again.png'
import './OrdersPage.css'

export function OrdersPage({ loadCart, cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/png" href="/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{convertTimeToDate(order.orderTimeMs)}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((prod) => {
                    let product = prod.product;
                    return (
                      <Fragment key={product.id}>
                        <div className="product-image-container">
                          <img src={product.image} />
                        </div>
                        <div className="product-details">
                          <div className="product-name">
                            {product.name}
                          </div>
                          <div className="product-delivery-date">
                            Arriving on: {convertTimeToDate(prod.estimatedDeliveryTimeMs)}
                          </div>
                          <div className="product-quantity">
                            Quantity: {prod.quantity}
                          </div>
                          <button className="buy-again-button button-primary" onClick={() => addToCart(loadCart, product, 1)}>
                            <img className="buy-again-icon" src={BuyAgain} />
                            <span className="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to={`/tracking/${order.id}/${product.id}`} >
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>);
                  })}
                </div>
              </div>);
          })}
        </div>
      </div>
    </>
  );
}