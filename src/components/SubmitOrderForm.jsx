import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import api from "../helpers/funcs/config.js";
import PaymentMethodCard from "./PaymentMethodCard.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SubmitOrderForm() {
  const [state, dispatch] = useCart();

  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const orderData = {
    orderedProducts: { ...state },
    name,
    region,
    address,
    city,
    province,
    postalCode,
    phone,
    email,
    note,
    paymentMethod,
  };

  const paymentMethodRadioButton = useRef(null);

  const submitOrder = () => {
    if (
      !name ||
      !region ||
      !address ||
      !city ||
      !province ||
      !postalCode ||
      !phone ||
      !email
    ) {
      toast.error("همه موارد را پر کنید");
    } else {
      api.post("/orders",orderData)
      dispatch({ type: "CHECKOUT", payload: orderData.orderedProducts });
    }
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-7 py-12 lg:py-24">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="flex flex-col items-start gap-y-7 lg:gap-y-9"
      >
        <h1 className="font-MorabaBold text-2xl lg:text-3xl">اطلاعات پرداخت</h1>
        <div className="billing-inputs w-full flex flex-col gap-y-4.5 lg:gap-y-9">
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              نام کامل
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="text"
              placeholder="نام کامل ... "
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              کشور / منطقه
            </label>
            <input
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="tel"
              dir="rtl"
              placeholder="برای مثال : ایران"
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              آدرس
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="text"
              dir="rtl"
              placeholder="آدرس"
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              شهر یا محله
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="text"
              placeholder="شهر یا محله ... "
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              استان
            </label>
            <input
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="text"
              placeholder="برای مثال : فارس"
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              کد پستی
            </label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="tel"
              dir="rtl"
              placeholder="کد پستی ... "
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              شماره تماس
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="tel"
              dir="rtl"
              placeholder="شماره تماس ... "
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              ایمیل
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="billing-input w-full lg:w-1/2 text-base sm:text-lg lg:text-base px-4.5 py-2.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="email"
              dir="rtl"
              placeholder="ایمیل ... "
            />
          </div>
          <div className="billing-input__wrapper w-full flex flex-col items-start gap-y-2.5 lg:gap-y-[22px]">
            <label className="font-DanaMedium text-base sm:text-lg lg:text-base">
              توضیحات
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="billing-input w-full lg:w-1/2 h-60 lg:h-44 resize-none text-base sm:text-lg lg:text-base px-4.5 py-1.5 lg:px-6 lg:py-2.5 border-2 border-[#9F9F9F] text-gray-2 focus:text-black focus:border-black blu rounded-xl outline-none transition-all duration-200"
              type="text"
              placeholder="توضیحات ... "
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="payment-method h-fit flex flex-col items-stretch lg:w-[608px] lg:gap-y-[22px]"
      >
        <div className="payment-method__header flex w-full items-center justify-between">
          <h1 className="font-MorabaMedium text-2xl">محصول</h1>
          <h1 className="font-MorabaMedium text-2xl">جمع جز</h1>
        </div>
        <div className="flex flex-col items-center gap-y-6 my-6 lg:my-0">
          {state.selectedItems.map((product) => (
            <PaymentMethodCard key={product.id} info={product} />
          ))}
        </div>
        <div className="flex w-full items-center justify-between pb-4.5 lg:pb-8 border-b-2 border-b-[#D9D9D9] mt-6 lg:mt-0">
          <span className="font-DanaDemi">مجموع فاکتور</span>
          <span className="font-DanaDemi text-lg text-primary-1">
            {state.total.toLocaleString()} تومان
          </span>
        </div>
        <div className="flex flex-col items-start gap-y-4 lg:gap-y-3 mt-5">
          <div className="flex items-center gap-x-3 lg:gap-x-2.5">
            <input
              onClick={(e) => setPaymentMethod(e.target.value)}
              value="پرداخت در محل"
              className="w-5 h-5"
              name="pay-method"
              type="radio"
              ref={paymentMethodRadioButton}
            />
            <label className="font-DanaMedium text-lg lg:text-xl">
              پرداخت در محل
            </label>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-2.5">
            <input disabled className="w-5 h-5" name="pay-method" type="radio" />
            <label className="font-DanaMedium text-lg lg:text-xl">
              پرداخت آنلاین
            </label>
          </div>
        </div>
        <button
          disabled={!paymentMethod}
          className="font-DanaDemi px-16 py-4.5 lg:px-25 lg:py-4 text-lg lg:text-xl mt-4 lg:mt-2.5 disabled:text-gray-2 disabled:border-gray-2 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-2 hover:bg-black hover:text-white border-2 border-black transition-all duration-200 rounded-xl"
          onClick={submitOrder}
        >
          تسویه حساب
        </button>
      </div>
    </div>
  );
}

export default SubmitOrderForm;
