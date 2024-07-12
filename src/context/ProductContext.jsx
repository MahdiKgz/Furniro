import { createContext, useContext, useEffect, useState } from "react";
import api from "../helpers/funcs/config";
import toast from "react-hot-toast";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        toast.error("مشکلی در دریافت محصولات پیش امد");
        console.log(error);
      }
    };
    fetchProducts();
  },[]);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  return useContext(ProductContext);
};

const useProductDetail = id => {
  const allProducts = useContext(ProductContext)
  const result = allProducts.find((product) => product.id === id)
  return result
}

export default ProductProvider;

export { useProducts , useProductDetail };
