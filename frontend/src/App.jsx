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
import Cart from "./ui/pages/cart/Cart";
import PasswordReset from "./PasswordReset";
import Admin from "./ui/roles/admin/Admin";
import VerifyUser from "./ui/components/VerifyUser";
import ViewList from "./ui/category_view/ViewList";
import Buyer from "./ui/roles/buyer/Buyer";
import PageNotFound from "./ui/PageNotFound/PageNotFound";

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
            <Route path="/profile/seller//*" element={<Seller />} />
            <Route path="/profile/admin//*" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path = "/signup" element = {<VerifyUser/>}/>
            <Route path = "/profile/buyer/order" element = {<Buyer/>}/>
            <Route path="/reset_password" element ={<PasswordReset/>}/>
            <Route path = "/category" element = {<ViewList/>}/>
            <Route path = "/*" element = {<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
