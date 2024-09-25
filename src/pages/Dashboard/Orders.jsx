import React, { useEffect, useState } from "react";
import api from "../../helpers/funcs/config";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://furniro-backend.liara.run/orders")
      .then((res) => res.json())
      .then((orders) => setOrders(()=> orders));
  }, []);
  return <div className="container">
    {
      orders.map(order => {
        <span>{order.name}</span>
      })
    }
  </div>;
}

export default Orders;
