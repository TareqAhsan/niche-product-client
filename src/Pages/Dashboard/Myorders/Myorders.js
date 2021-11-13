import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Table, Button, Alert } from "react-bootstrap";
const Myorders = () => {
  const [myOrder, setMyOrder] = useState();
  const [cancel, setCancel] = useState(false);
  const { allContext } = useAuth();
  const { user } = allContext;

  useEffect(() => {
    axios(
      `https://fast-ravine-78519.herokuapp.com/orders?email=${user?.email}`
    ).then((result) => {
      setMyOrder(result.data);
    });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to cancel Your Order ?");
    if (proceed) {
      axios
        .delete(`https://fast-ravine-78519.herokuapp.com/orders/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            const remain = myOrder.filter((order) => order._id !== id);
            setMyOrder(remain);
            setCancel(true);
          }
        });
    }
  };

  return (
    <div className="container">
      {myOrder?.length ? (
        <h3 className="display-6 my-4">You have Ordered the Following Item</h3>
      ) : (
        <h3 className="display-6 my-4">You Have No orders</h3>
      )}
      <div>
        {cancel && <Alert variant="danger">order Canceled successfully</Alert>}
        <div className="p-3 rounded shadow bg-light">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>status</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {myOrder?.map((order) => (
                <tr key={order._id}>
                  <td>{order?.brand}</td>
                  <td>{order.model}</td>
                  <td>{order.price}</td>
                  <td>{order.status}</td>
                  <td>
                    <Button onClick={() => handleDelete(order._id)}>
                      cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Myorders;
