import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Layout from "./Layout";
import SingleProductData from "./pages/SingleProductData";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./ProtectedRoute";
import useUserStore from "./stores/useUserStore";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

export default function App() {
  const {isLoggedIn} = useUserStore();


  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/product/:productId" element={<SingleProductData />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute isAllowed={isLoggedIn}>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
