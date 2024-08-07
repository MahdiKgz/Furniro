import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import { useCart } from "../context/CartContext";
import PageHeader from "../components/PageHeader";

import ShopOptions from "../components/ShopOptions";
import CheckoutCard from "../components/CheckoutCard";
import { Link, Outlet } from "react-router-dom";
function Checkout() {
  const [state, dispatch] = useCart();
  // console.log(state);
  return (
    <>
      <PageHeader title="سبد خرید" />
      <div className="checkOutMain container flex flex-wrap xl:flex-nowrap gap-y-10 lg:gap-x-8 py-12 sm:py-16 lg:py-[72px]">
        <div className="checkOut-main__right flex flex-col gap-y-10 lg:gap-y-14 w-full lg:w-[80%]">
          <div className="checkOut-main__right-header flex items-center justify-evenly bg-primary-4 px-5 py-5 lg:px-0 lg:py-4 rounded-md lg:rounded-xl child:lg:text-base child:sm:text-lg child:text-center">
            <h5 className="font-MorabaMedium w-25">تصویر محصول</h5>
            <h5 className="font-MorabaMedium line-clamp-1 sm:w-22 lg:w-25">
              محصول
            </h5>
            <h5 className="font-MorabaMedium line-clamp-1 sm:w-22 lg:w-25">
              قیمت کل
            </h5>
            <h5 className="font-MorabaMedium line-clamp-1 sm:w-22 lg:w-25 hidden sm:block">
              رنگ
            </h5>
            <h5 className="font-MorabaMedium line-clamp-1 sm:w-22 lg:w-25 hidden lg:block">
              سایز
            </h5>
            <h5 className="font-MorabaMedium line-clamp-1 sm:w-22 lg:w-25 hidden lg:block">
              تعداد
            </h5>
            <h5 className="font-MorabaMedium line-clamp-1 hidden lg:block sm:w-22 lg:w-25">
              قیمت واحد
            </h5>
            <h5 className="font-MorabaMedium line-clamp-1 sm:w-22 lg:w-25">
              حذف از سبد
            </h5>
          </div>
          <div className="checkOutMain__right-list flex flex-col items-center">
            {state.selectedItems.length ? (
              state.selectedItems.map((product) => (
                <CheckoutCard
                  key={product.id}
                  data={product}
                  dispatch={dispatch}
                />
              ))
            ) : (
              <div className="w-full flex flex-col gap-y-6 lg:gap-y-5 items-center text-primary-1 font-DanaDemi">
                <span className="text-xl lg:text-2xl">
                  {" "}
                  چیزی برای نمایش وجود ندارد
                </span>
                <Link
                  className="bg-primary-1 text-white rounded-xl px-10 py-2.5 lg:px-14 lg:py-3.5"
                  to="/shop"
                >
                  رفتن به فروشگاه
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="checkOut-main__left lg:sticky lg:top-10 lg:right-0 bg-primary-4 flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-[26%] lg:h-[400px] gap-y-7 lg:gap-y-14 sm:mx-auto md:px-0 py-4.5 lg:py-5 lg:px-[75px] rounded-xl">
          <h1 className="font-MorabaBold text-xl lg:text-2xl">مجموع سفارشات</h1>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-7">
            <div className="flex items-center justify-between w-full gap-x-12 lg:gap-x-16">
              <h1 className="font-DanaMedium">تعداد سفارشات</h1>
              <span className="font-DanaDemi text-sm">
                {state.itemsCounter}
              </span>
            </div>
            <div className="flex items-center justify-between w-full gap-x-12 lg:gap-x-16">
              <h1 className="font-DanaMedium">قابل پرداخت</h1>
              <span className="font-DanaDemi text-sm text-primary-1">
                {state.total.toLocaleString()}
              </span>
            </div>
          </div>
          <Link
            to="/checkout/place-order"
            className="font-DanaMedium px-8 py-2.5 lg:px-14 lg:py-4.5  hover:bg-black hover:text-white border-2 border-black transition-all duration-300 delay-75 rounded-xl"
          >
            ادامه
          </Link>
        </div>
      </div>
      <div>{!!state.selectedItems.length && <Outlet />}</div>
      <ShopOptions />
    </>
  );
}

export default Checkout;
