import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useAuth } from "./hooks/useAuth";

function App() {
  useAuth();

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
