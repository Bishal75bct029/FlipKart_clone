import "./index.css";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import ViewProduct from "./pages/ProductDetails/components/ViewProduct";
import ViewProductTest from "./pages/ProductDetails/ViewProductTest";
import Filters from "./pages/ProductListing/components/Filters";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/getProduct/:id" element={<ViewProduct/>} />
          <Route path="/products" element ={<Filters/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
