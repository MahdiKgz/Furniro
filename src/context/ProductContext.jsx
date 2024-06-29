import { createContext, useContext, useEffect, useState } from "react";
import api from "../helpers/funcs/config";
import toast from "react-hot-toast";

const productContext = createContext();

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
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
}

const useProducts = () => {
  return useContext(productContext);
};

export default ProductProvider;

export { useProducts };
