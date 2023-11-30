import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingOrders } from '../../ordern/api/OrderSlice';

const DeliveryDashboard = () => {
  const dispatch = useDispatch();
  const { pendingOrders, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchPendingOrders());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Pending Orders</h2>
      <ul>
        {pendingOrders.map((order) => (
          <li key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Customer: {order.customerName}</p>
            {/* Display other order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryDashboard;
