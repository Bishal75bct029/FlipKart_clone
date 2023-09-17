import "./index.css";
import { Provider } from "react-redux";
import Home from "./ui/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import ViewProduct from "./ui/pages/ProductDetails/components/ViewProduct";
import ViewProductTest from "./ui/pages/ProductDetails/ViewProductTest";
import Filters from "./ui/pages/ProductListing/components/Filters";
import ProductListing from "./ui/pages/ProductListing/ProductListing";
import Seller from "./ui/roles/seller/Seller";
// import { CartesianContext } from "@mui/x-charts/context/CartesianContextProvider";
import Cart from "./ui/pages/order/Cart";
import PasswordReset from "./PasswordReset";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="/getProduct/:id" element={<ViewProduct />} />
            <Route path="/products/*" element={<ProductListing />} />
            <Route path="/profile/seller" element={<Seller />} />
            <Route path="/order" element={<Cart />} />
            <Route path="/reset_password" element ={<PasswordReset/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
