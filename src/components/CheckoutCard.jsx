import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

function CheckoutCard({ data , dispatch }) {
  const { id, imageUrl, title, price, quantity,productSize,productColor, discount } = data;
  return (
    <div className="checkoutCard font-DanaMedium w-full flex items-center justify-evenly text-gray-600 py-5 lg:py-4">
      <Link to={`/shop/${id}`} className="image-wrapper bg-primary-4 rounded-xl">
        <img
          className="w-20 h-20 lg:w-25 lg:h-25 rounded-xl"
          src={imageUrl}
          alt="productCover"
        />
      </Link>
      <div className="w-22 lg:w-25 text-center">{title}</div>
      <div className="w-22 lg:w-25 text-center">
        {(price - (price * discount.amount) / 100).toLocaleString()}
      </div>
      <div className="w-22 lg:w-25 hidden sm:block">
        {
          productColor === "#000000" ? 
          <p className={`w-full bg-black rounded-md`}>&nbsp;</p>
          :
          productColor === "#B88E2F" ? <p className={`w-full bg-primary-1 rounded-md`}>&nbsp;</p> : productColor === null ?  <p className={`w-full bg-[${productColor}] rounded-md`}>تعیین نشده</p> :  <p className={`w-full bg-[${productColor}] rounded-md`}>&nbsp;</p>
        }
        
      </div>
      <div className="w-22 lg:w-25 hidden lg:block text-center">
      {
          productSize ? 
          productSize
          :
          <span>تعیین نشده</span>
        }
      </div>
      <div className="w-22 lg:w-25 hidden lg:block text-center">{quantity}</div>
      <div className="w-22 lg:w-25 hidden lg:block text-center">{price.toLocaleString()}</div>
      <div className="w-22 lg:w-25 text-center flex items-center justify-center cursor-pointer">
        <FiTrash2 onClick={() => dispatch({type : "DELETE" , payload : data})} size={28} stroke="#B88E2F" className="hover:stroke-red-600 transition-colors duration-300" />
      </div>
    </div>
  );
}

export default CheckoutCard;
