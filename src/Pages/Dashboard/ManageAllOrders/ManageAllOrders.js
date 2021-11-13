import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Table, Button } from "react-bootstrap";
const ManageAllOrders = () => {
  const [manageorder, setManageorder] = useState();
  const { register, handleSubmit } = useForm();
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    axios("https://fast-ravine-78519.herokuapp.com/manage").then((result) =>
      setManageorder(result.data)
    );
  }, []);

  const handleOrderId = (id) => {
    setOrderId(id);
    // console.log(id);
  };
  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`https://fast-ravine-78519.herokuapp.com/status/${orderId}`, data)
      .then((result) => console.log(result.data));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this order?");
    if (proceed) {
      axios
        .delete(`https://fast-ravine-78519.herokuapp.com/manage/${id}`)
        .then((result) => {
          if (result.data.deletedCount) {
            const remain = manageorder?.filter((orders) => orders._id !== id);
            setManageorder(remain);
          }
        });
    }
  };
  return (
    <div>
      <h3 className="display-5 my-4"> Manage All orders</h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>customer Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageorder?.map((order) => (
            <tr key={order._id}>
              <td>{order?.name}</td>
              <td>{order?.brand}</td>
              <td>{order.model}</td>
              <td>{order.price}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(order?._id)}
                    {...register("status")}
                  >
                    <option value={order?.status}>{order?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <Button type="submit" variant="primary" size="sm">
                    submit
                  </Button>
                </form>
              </td>
              <td>
                <Button size="sm" onClick={() => handleDelete(order._id)}>
                  cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
