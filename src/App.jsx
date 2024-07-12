import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import InedexLayout from "./Layouts/InedexLayout";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProductProvider from "./context/ProductContext";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <InedexLayout>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </InedexLayout>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
