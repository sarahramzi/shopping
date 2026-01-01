import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./Layout";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/AllProducts" element={<AllProducts />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
