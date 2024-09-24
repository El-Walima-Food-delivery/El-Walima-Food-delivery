import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { logoutUser } from "../redux/features/authSlice";
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
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        {/* left */}
        <div className="flex flex-grow">
          <img
            className="w-36 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        {/* right */}
        {user ? (
          <div className="flex items-center justify-end space-x-4">
            {user.role === "driver" && (
              <NavLink to="/delivery-interface" className="text-gray-600">
                Delivery Interface
              </NavLink>
            )}
            <div
              className="relative flex cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">
                {items.length}
              </span>
              <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
            </div>
            <img
              src={user.photoURL}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-gray-700 poppins hidden md:block lg:block">
              {user.name}
            </p>
            <FiLogOut
              className="cursor-pointer w-6 h-6 text-gray-700"
              onClick={handleLogout}
            />
          </div>
        ) : (
          <div className="flex items-center justify-end space-x-6">
            <button className="poppins" onClick={() => navigate("/signin")}>
              Sign In
            </button>
            <button
              className="bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
