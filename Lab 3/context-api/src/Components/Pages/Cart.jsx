import React, { useContext } from "react";
import CartContext from "../../Context APIs/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Cart() {
  let { cart, setCart } = useContext(CartContext);
  let total = 0;

  const handleIncrement = (item) => {
    const index = cart.indexOf(item);
    cart[index].quantity++;
    setCart([...cart]);
  };

  const handleDecrement = (item) => {
    const index = cart.indexOf(item);
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      setCart([...cart]);
    }
  };

  const handleRemove = (item) => {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    setCart([...cart]);
  };

  const calculateTotal = () => {
    total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="d-flex justify-content-center">
      <div className=" col-9">
        <h1 className="text-center">My Cart</h1>
        <table className="table ">
          <thead>
            <tr>
              <th className="col-1 text-center">Image</th>
              <th className="col-1">Title</th>
              <th className="col-4">Description</th>
              <th className="col-1">Price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="col-1">
                  <img
                    src={item.images[0]}
                    alt="..."
                    style={{ width: "100px" }}
                  />
                </td>
                <td className="col-1">{item.title}</td>
                <td className="col-4">{item.description}</td>
                <td className="col-1">${item.price}</td>
                <td
                  class="text-center d-flex justify-content-center flex-row align-items-start"
                  style={{ height: "120px" }}
                >
                  <div class="input-group w-25 me-3">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-type="minus"
                      data-bs-field="quant[1]"
                      onClick={() => handleDecrement(item)}
                    >
                      <span class="bi bi-dash">-</span>
                    </button>
                    <input
                      type="text"
                      name="quant[2]"
                      class="form-control input-number text-center w-25"
                      min="1"
                      max="100"
                      value={item.quantity}
                      disabled
                    />
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-type="plus"
                      data-bs-field="quant[1]"
                      onClick={() => handleIncrement(item)}
                    >
                      <span class="bi bi-plus">+</span>
                    </button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5 className="text-center">Total: {calculateTotal()} $</h5>
      </div>
    </div>
  );
}
