import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import { sumProducts } from "../helpers/funcs/shared";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
    }
    toast.success("محصول اضافه شد")
      return {
          ...state,
          checkOut: false,
          ...sumProducts(state.selectedItems),
        };
    }
};


const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;

export { useCart };
