import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Bills from "./components/Bills";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Dashboard/Layout";
import Favorite from "./components/Favorite";
import FoodOrder from "./components/FoodOrder";
import Home from "./components/Home";
import Message from "./components/Message";
import OrderHistory from "./components/OrderHistory";
import Setting from "./components/Setting";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const { user } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="food-order" element={<FoodOrder />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="message" element={<Message />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="bills" element={<Bills />} />
          <Route path="setting" element={<Setting />} />
          <Route path="signin" element={!user ? <SignIn /> : <Navigate to="/" />} />
          <Route path="signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;