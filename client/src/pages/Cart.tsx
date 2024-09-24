import axios from "axios";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Back from "../pages/back";
import {
  clearCartAsync,
  removeFromCartAsync,
  updateQuantityAsync,
} from "../redux/features/cartSlice";
import { AppDispatch, RootState } from "../redux/store";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCartAsync(id));
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantityAsync({ id, quantity: newQuantity }));
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const orderResponse = await axios.post(
        "http://localhost:3000/api/orders/create",
        {
          items: cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const paymentResponse = await axios.post(
        "http://localhost:3000/api/payment/generatePayment",
        {
          amount: Math.round(totalPrice),
          developerTrackingId: `order_${Math.random()}`,
          orderId: orderResponse.data.order.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (paymentResponse.data.result && paymentResponse.data.result.link) {
        window.open(paymentResponse.data.result.link, "_blank");
      }

      const { order, delivery } = orderResponse.data;

      await dispatch(clearCartAsync());
      if (delivery) {
        swal(
          "Congratulations!!!",
          `Your order has been placed successfully. Order ID: ${order.id}\nDriver: ${delivery.driver.name}\nDriver Phone: ${delivery.driver.email}`,
          "success"
        );
      } else {
        swal(
          "Order Placed",
          `Your order has been placed successfully. Order ID: ${order.id}\nNo driver is currently available. Please check back later.`,
          "success"
        );
        navigate("/orders"); // Assuming you have an orders page to view order history
      }
    } catch (error) {
      console.error("Error placing order:", error);
      swal("Error", "Failed to place order. Please try again.", "error");
    }
  };

  const subTotal = parseFloat(totalPrice.toFixed(2));
  const tax = parseFloat((totalPrice * 0.05).toFixed(2));
  const deliveryFee = parseFloat((totalPrice * 0.1).toFixed(2));
  const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2));
  console.log(cartItems);

  return (
    <main className="min-h-screen banner">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        <div className="mb-12">
          <Back />
        </div>
        <h2 className="text-2xl poppins pb-4 mb-8 inline-block border-b-2 border-gray-500 text-gray-700">
          Your Cart
        </h2>
        {cartItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* left side - cart items */}
              <div className="col-span-1">
                <div className="flex flex-col space-y-4 h-96 overflow-y-auto pr-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="glass p-4 rounded-lg flex space-x-3"
                    >
                      <div className="flex">
                        <img
                          className="w-24 h-24 object-cover rounded-lg"
                          src={item.imageUrl}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex flex-col space-y-3 flex-grow">
                        <h5 className="text-base poppins text-gray-700">
                          {item.name}
                        </h5>
                        <h1 className="font-semibold text-lg text-primary poppins">
                          {Number(item.price).toFixed(2)} TND
                        </h1>
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-gray-200 rounded-l"
                          >
                            -
                          </button>
                          <span className="poppins px-4 py-1 bg-gray-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-gray-200 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <AiOutlineDelete
                          className="w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* right side - order summary */}
              <div className="col-span-1">
                <div className="glass p-6 box-border rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 poppins">
                    Order Summary
                  </h2>
                  <div className="flex flex-col space-y-4 mb-3">
                    <p className="poppins text-gray-700">
                      Total Items:{" "}
                      <span className="font-semibold text-black">
                        {cartItems.length}
                      </span>
                    </p>
                    <p className="poppins text-gray-700">
                      Estimated Delivery Time:{" "}
                      <span className="font-semibold text-black">
                        20-30 min
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 my-4">
                    <div className="flex items-center">
                      <span className="flex-grow poppins text-gray-700">
                        Subtotal
                      </span>
                      <span className="poppins font-semibold text-black">
                        ${subTotal}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-grow poppins text-gray-700">
                        Tax
                      </span>
                      <span className="poppins font-semibold text-black">
                        ${tax}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-grow poppins text-gray-700">
                        Delivery Fee
                      </span>
                      <span className="poppins font-semibold text-black">
                        ${deliveryFee}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="flex-grow poppins text-gray-700 text-xl">
                        Total
                      </span>
                      <span className="poppins font-semibold text-black text-xl">
                        ${total}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={handlePlaceOrder}
                      className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500"
                    >
                      Place Order
                    </button>
                  </div>
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
