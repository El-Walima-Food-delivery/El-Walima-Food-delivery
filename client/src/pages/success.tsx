import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import orderSuccessful from "../assets/ordersuccess.png";
import { clearCartAsync } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
const OrderSuccessfulScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get("orderId");

  useEffect(() => {
    setLoading(true);
    dispatch(clearCartAsync());
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleTrackOrder = () => {
    if (orderId) {
      navigate(`/delivery-tracking/${orderId}`);
    } else {
      console.error("Order ID not found");
    }
  };

  return (
    <main className="h-screen banner">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-3/4 pt-24">
            <GridLoader color="#ce193c" loading={loading} size={25} />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center h-3/4 pt-24">
              <h1 className="text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center ">
                <MdVerified className="text-primary green-500 text-3xl" /> Order
                Successful!!!
              </h1>
              <img
                className="w-96 object-contain"
                src={orderSuccessful}
                alt="orderSuccessful"
              />
              <div className="flex flex-col space-y-4 mt-8 w-full max-w-xs mx-auto">
                <button
                  className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => navigate("/")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Go back to home
                </button>
                {orderId && (
                  <button
                    className="bg-orange-500 text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105 flex items-center justify-center"
                    onClick={handleTrackOrder}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Track Order
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default OrderSuccessfulScreen;
