import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import RestaurantOwner from "./components/RestaurantOwner/RestaurantOwner";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import HomePage from "./pages/HomePage";
import OneItemdetail from "./pages/OneItemdetail";
import ManageProduct from "./components/RestaurantOwner/ManageProduct";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import { useCart } from "./hooks/useCart";
import DeliveryTracking from "./pages/DeliveryTracking";
import DeliveryInterface from "./pages/DeliveryInterface";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./components/RestaurantOwner/AddProduct";
import ArchivedProductScreen from "./components/RestaurantOwner/ArchivedProductScreen";
import DashboardScreen from "./components/RestaurantOwner/dashboard/Dashboard1";
import EditProductScreen from "./components/RestaurantOwner/EditProduct";
import OrderSuccessfulScreen from "./pages/Success";
import PaymentFailedScreen from "./pages/Error";
import ErrorScreen from "./pages/404";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRoles: string[];
}> = ({ children, allowedRoles }) => {
  const { user } = useSelector((state: RootState) => state.users);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

const App = () => {
  useAuth();
  useCart();

  const { user } = useSelector((state: RootState) => state.users);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/OneItemdetail/:id" element={<OneItemdetail />} />
        {user && user.role === "restaurant_owner" && (
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index path="restaurantowner" element={<RestaurantOwner />} />
            <Route path="manage-products" element={<ManageProduct />} />
            <Route path="updateProduct/:id" element={<EditProductScreen />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route
              path="restaurantowner/dashboard"
              element={<DashboardScreen />}
            />
            <Route
              path="Archived-Product"
              element={<ArchivedProductScreen />}
            />
          </Route>
        )}
        {user && user.role === "customer" && (
          <>
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
          </>
        )}
        {user && user.role === "driver" && (
          <Route
            path="/delivery-interface"
            element={
              <ProtectedRoute allowedRoles={["driver"]}>
                <DeliveryInterface />
              </ProtectedRoute>
            }
          />
        )}
        <Route path="/success" element={<OrderSuccessfulScreen />} />
        <Route path="/failed" element={<PaymentFailedScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
