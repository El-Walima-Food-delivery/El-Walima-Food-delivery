import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import { useCart } from "./hooks/useCart";
import ErrorScreen from "./pages/404";
import Cart from "./pages/Cart";
import DeliveryInterface from "./pages/DeliveryInterface";
import DeliveryTracking from "./pages/DeliveryTracking";
import PaymentFailedScreen from "./pages/Error.tsx";
import HomePage from "./pages/HomePage.tsx";
import OneItemdetail from "./pages/OneItemdetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OrderSuccessfulScreen from "./pages/success";
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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/OneItemdetail/:id" element={<OneItemdetail />} />
        <Route path="/success" element={<OrderSuccessfulScreen />} />
        <Route path="/failed" element={<PaymentFailedScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
