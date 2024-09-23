import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import orderSuccessful from "../assets/ordersuccess.png";

const OrderSuccessfulScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //loading
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

              <button
                className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                onClick={() => navigate("/")}
              >
                Go back to home
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default OrderSuccessfulScreen;
