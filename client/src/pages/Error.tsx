import { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import paymentFailed from "../assets/undraw_Not_found_re_bh2e.png";

const PaymentFailedScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="h-screen banner">
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="flex flex-col items-center justify-center h-3/4 pt-24">
            <h1 className="text-3xl text-center text-red-600 font-semibold poppins flex space-x-6 items-center">
              <MdError className="text-red-600 text-3xl" /> Payment Failed
            </h1>
            <img
              className="w-96 object-contain"
              src={paymentFailed}
              alt="paymentFailed"
            />
            <p className="text-gray-600 mt-4 text-center">
              We're sorry, but your payment couldn't be processed. Please try
              again or contact support.
            </p>
            <button
              className="bg-red-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-12 transform transition duration-300 hover:scale-105"
              onClick={() => navigate("/cart")}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default PaymentFailedScreen;
