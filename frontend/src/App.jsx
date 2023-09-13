import "./index.css";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import ViewProduct from "./pages/ProductDetails/components/ViewProduct";
import ViewProductTest from "./pages/ProductDetails/ViewProductTest";
import Filters from "./pages/ProductListing/components/Filters";
import ProductListing from "./pages/ProductListing/ProductListing";
import Seller from "./roles/seller/Seller";

function App() {
  return (
    <div style={{height:'100%',width:'100%'}}>

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/getProduct/:id" element={<ViewProduct/>} />
          <Route path="/products" element ={<ProductListing/>}/>
          <Route path = "/profile/seller" element = {<Seller/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
