import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import OneItemdetail from "./pages/OneItemdetail";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/OneItemdetail/:id" element={<OneItemdetail />} />
      </Routes>
    </Router>

  );
};

export default App;
