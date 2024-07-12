import { IoMdSwap } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ data }) {
  const {id ,title , category , price , imageUrl , discount } = data;

  const [state , dispatch] = useCart();

  const addItemHandler = () => {
    dispatch({type : "ADD_ITEM" , payload : data})
  }
  
  return (
    <div className="product-card relative w-[160px] sm:w-[240px] lg:w-[285px] overflow-hidden group">
      <div className="product-card__top relative rounded-xl">
        <img
          className="product-card__image rounded-t-xl"
          src={imageUrl}
          alt="cover"
        />
        <div
          dir="ltr"
          className={`flex items-center text-xs md:text-sm justify-center absolute w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-center top-1.5 sm:top-3.5 right-1.5 sm:right-3.5 lg:top-4 lg:right-4 text-white font-MorabaBold  ${
            discount.isAvailable ? "bg-red-400" : "bg-emerald-600"
          } rounded-full`}
        >
          {
            discount.isAvailable ? `-${discount.amount}%` : "جدید"
          }
        </div>
      </div>
      <div className="product-card__bottom h-auto bg-gray-1 p-2.5 sm:px-4.5 sm:pt-3.5 sm:pb-5 lg:pt-2.5 rounded-b-xl">
        <div className="product-card__bottom-desc flex flex-col items-start gap-y-1 lg:gap-y-0.5">
          <h1 className="product__title font-DanaDemi text-sm sm:text-lg">
            {title}
          </h1>
          <span className="product__category text-sm text-gray-2 line-clamp-1">
            {category}
          </span>
        </div>
        <div className="product-card__bottom-price flex items-center justify-between mt-4.5">
          <span className="main__price font-DanaDemi text-xs sm:text-[15px]">
           {
            discount.isAvailable ? (price - price * discount.amount / 100 ).toLocaleString() : price.toLocaleString()
           }   تومان  
          </span>
          {
            discount.isAvailable ? (<span className="discount__price text-gray-3 hidden sm:inline-block sm:text-xs lg:text-sm">
            {price.toLocaleString()} تومان
          </span>) : null
          }
          
        </div>
      </div>
      <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:cursor-pointer flex justify-center items-center inset-0 bg-black/40 rounded-xl z-[2] lg:px-16 transition-all duration-200 delay-100">
        <div className="flex flex-col lg:gap-y-1">
          <button onClick={addItemHandler} className="font-DanaMedium px-6 py-2 lg:px-8 lg:py-2.5 lg:text-base bg-white text-primary-1 rounded-xl">
            افزودن به سبد
          </button>
          <div className="flex items-center justify-center gap-x-4 lg:gap-x-12 text-white mt-3.5 lg:mt-4.5 w-full sm:w-[200px] lg:w-[245px] overflow-hidden">
            <button className="flex items-center gap-x-1 lg:gap-x-1.5">
              <IoMdSwap size={18} />
              <span>مقایسه</span>
            </button>
            <Link to={`/shop/${id}`} className="flex items-center gap-x-1 lg:gap-x-1.5">
              <BsHeart size={18} />
              <span>مشاهده</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
