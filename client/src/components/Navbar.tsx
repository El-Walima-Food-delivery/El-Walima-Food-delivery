import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { logoutUser } from "../redux/features/authSlice"; // Assuming you have this action
import { BsCart2 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logo from "../../src/assets/logo2.png";

const Navbar: React.FC = () => {
  const [changeHeader, setChangeHeader] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.users);
  const { items } = useSelector((state: RootState) => state.cart);

  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onChangeHeader);
    return () => window.removeEventListener("scroll", onChangeHeader);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signin");
  };

  return (
    <header
      className={
        changeHeader
          ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
          : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
      }
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center">
          <img
            className="w-36 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/cart" className="relative">
                <BsCart2 className="w-6 h-6 text-gray-700" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition duration-300"
              >
                <FiLogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="text-gray-700 hover:text-primary transition duration-300"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </button>
              <button
                className="bg-primary px-6 py-2 text-white rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-300 hover:scale-105"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
