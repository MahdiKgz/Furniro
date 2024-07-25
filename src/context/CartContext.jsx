import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import { sumProducts } from "../helpers/funcs/shared";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        toast.success("محصول اضافه شد");
      } else toast.error("محصول قبلا اضافه شده است");
      return {
        ...state,
        checkOut: false,
        ...sumProducts(state.selectedItems),
      };
    case "DELETE":
      const newDisplayedList = state.selectedItems.filter(product => product.id !== action.payload.id)
      toast.success("محصول حذف شد")
      return {
        selectedItems : newDisplayedList,
        checkOut : false ,
        ...sumProducts(newDisplayedList)
      };
    case "CHECKOUT":
      if (action.payload.selectedItems.length){
        toast.success("تسویه حساب انجام شد")
        return {
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkOut: true,
        };
      }
      else {
        toast.error("سبد خرید خالی است")
        return action.payload
      }
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
