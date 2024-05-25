import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  const handleIncrement = (product) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: product.id });
  };

  const handleDecrement = (product) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: product.id });
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
