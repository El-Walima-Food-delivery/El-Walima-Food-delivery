import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
import RestaurantOwner from './components/RestaurantOwner/RestaurantOwner';

import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import OneItemdetail from "./pages/OneItemdetail";
import HomePage from "./pages/HomePage";
import ManageProduct from "./components/RestaurantOwner/ManageProduct";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./components/RestaurantOwner/AddProduct";
import ArchivedProductScreen from "./components/RestaurantOwner/ArchivedProductScreen";
import DashboardScreen from "./components/RestaurantOwner/dashboard/Dashboard1";
import EditProductScreen from "./components/RestaurantOwner/EditProduct";
const App = () => {
  useAuth();



  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/OneItemdetail/:id" element={<OneItemdetail />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="restaurantowner" element={<RestaurantOwner />} />
          <Route path="manage-products" element={<ManageProduct />} />
          <Route path="updateProduct/:id" element={<EditProductScreen />} /> {/* Update this line */}
          <Route path="add-product" element={<AddProduct />} />
          <Route path="restaurantowner/dashboard" element={<DashboardScreen />} />
          <Route path="Archived-Product" element={<ArchivedProductScreen/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
