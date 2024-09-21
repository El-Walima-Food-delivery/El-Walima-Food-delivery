import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { RootState } from "../redux/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/features/cartSlice";
import Back from "../pages/back";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handlePlaceOrder = () => {
    swal(
      "Congratulations!!!",
      `You have ordered ${cartItems.length} items successfully`,
      "success"
    );
    navigate("/order-successful");
    dispatch(clearCart());
  };

  return (
    <main className="h-screen banner">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        <Back />
        {cartItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              <div className="col-span-1">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                    >
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          {item.price.toFixed(2)} TND
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.name} x {item.quantity}
                        </span>
                        <span>
                          {(item.price * item.quantity).toFixed(2)} TND
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>{totalPrice.toFixed(2)} TND</span>
                    </div>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full mt-6 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition duration-300"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="pt-24">
            <h1 className="text-center text-5xl text-primary poppins">
              Your cart is empty!
            </h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
