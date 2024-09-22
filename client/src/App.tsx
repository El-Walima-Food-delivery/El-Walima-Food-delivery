import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import HomePage from "./pages/HomePage.tsx";
import OneItemdetail from "./pages/OneItemdetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import { useCart } from "./hooks/useCart";
import DeliveryTracking from "./pages/DeliveryTracking";
import DeliveryInterface from "./pages/DeliveryInterface";
const App = () => {
  useAuth();
  useCart();
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/delivery-tracking/:orderId"
          element={<DeliveryTracking />}
        />
        <Route path="/delivery-interface" element={<DeliveryInterface />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/OneItemdetail/:id" element={<OneItemdetail />} />
      </Routes>
    </Router>
  );
};

export default App;
