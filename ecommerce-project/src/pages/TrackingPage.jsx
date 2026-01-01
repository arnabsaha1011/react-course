import axios from 'axios';
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import { Header } from "../components/Header";
import { useParams } from "react-router";
import { convertTimeToDate } from '../utils/time.js';
import dayjs from 'dayjs';

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      console.log(response.data);
      setOrder(response.data);
    }

    fetchTrackingData();
  }, [orderId]);

  if (!order)
  {
    return <div>Loading...</div>
  }
  const orderProduct = order.products.find(prod => prod.product.id === productId)
  const timePassed = dayjs().valueOf() - order.orderTimeMs;
  const totalDeliveryTime = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  let deliveryProgress = timePassed / totalDeliveryTime * 100;
  if (deliveryProgress > 100) {
    deliveryProgress = 100;
  }

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/png" href="/tracking-favicon.png" />

      <Header cart={cart}/>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {convertTimeToDate(orderProduct.estimatedDeliveryTimeMs)}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container" >
            <div className="progress-label">
              Preparing
            </div>
            <div className="progress-label">
              Shipped
            </div>
            <div className="progress-label">
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${deliveryProgress}%`}}></div>
          </div>
        </div>
      </div>
    </>
  );
}