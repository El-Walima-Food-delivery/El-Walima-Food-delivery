import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
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

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRoles: string[];
}> = ({ children, allowedRoles }) => {
  const { user } = useSelector((state: RootState) => state.users);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

const App = () => {
  useAuth();
  useCart();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/OneItemdetail/:id" element={<OneItemdetail />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delivery-tracking/:orderId"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <DeliveryTracking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delivery-interface"
          element={
            <ProtectedRoute allowedRoles={["driver"]}>
              <DeliveryInterface />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
