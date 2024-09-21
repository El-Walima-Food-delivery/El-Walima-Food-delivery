import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import OneItemdetail from "./pages/OneItemdetail";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useAuth } from "./hooks/useAuth";

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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
