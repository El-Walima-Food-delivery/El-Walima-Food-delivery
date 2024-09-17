import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bills from "./components/Bills";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Dashboard/Layout";
import Favorite from "./components/Favorite";
import FoodOrder from "./components/FoodOrder";
import Message from "./components/Message";
import OrderHistory from "./components/OrderHistory";
import Setting from "./components/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="food-order" element={<FoodOrder />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="message" element={<Message />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="bills" element={<Bills />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
