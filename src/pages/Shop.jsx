import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import { BsFilterRight } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";

import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { filterByDiscount, filterByNewest, paginateItems } from "../helpers/funcs/shared";
import { Pagination } from "@mui/material";

function Shop() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const [category , setCategory] = useState("")

  const [pagintaionCount , setPaginationCount] = useState(0)

  const changePageHandler = e => {
    setCurrentPage(Number(e.target.innerText))
  }

  const func = async() => {
    setDisplayed(await paginateItems(products,itemsPerPage,currentPage))
    setPaginationCount(Math.ceil(products.length / itemsPerPage))
  }

  const categoryChangeHandler = async (e) => {
    const categorySelectValue = e.target.value 

    switch(categorySelectValue){
      case "default" : 
        setCategory("")
        func();
      case "discount" : 
        const filterProducts = await filterByDiscount(products)
        setDisplayed(filterProducts)
        setPaginationCount(0)
        break;
      case "newest" : 
        const newestProducts = filterByNewest(products)
        setDisplayed(newestProducts)
        setPaginationCount(0)
    }
  }
 

  useEffect(() => {
    func();
  } , [currentPage,itemsPerPage])

  return (
    <>
      <div className="bg-shop bg-cover bg-no-repeat w-full h-[220px] lg:h-[356px] flex flex-col items-center justify-center gap-y-6 lg:gap-y-5">
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          className="font-MorabaMedium text-4xl lg:text-5xl"
        >
          فروشگاه
        </h1>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex items-center gap-x-3.5 lg:gap-x-5"
        >
          <Link to="/" replace className="font-DanaMedium text-base">
            خانه
          </Link>
          <BiChevronLeft size={21} />
          <span className="text-base">فروشگاه</span>
        </div>
      </div>
      <div className="filteration-section bg-primary-4 lg:h-20">
        <div className="container w-full h-full flex items-center flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-y-8 py-6 lg:py-2.5">
          <div className="filteration__right flex items-center">
            <div className="filteration__right-icons flex items-center gap-x-4.5 lg:gap-x-6 px-5 lg:px-8 border-l-2 border-l-[#9F9F9F]">
              <span className="flex items-center gap-x-0.5 lg:gap-x-1.5 font-DanaMedium">
                <BsFilterRight size={23} />
                <span className="text-sm font-DanaDemi">فیلتر</span>
              </span>
              <PiCirclesFourFill size={23} />
              <BsViewList size={23} />
            </div>
            <div className="filteration__right-text font-DanaMedium px-5 lg:px-8">
              {`
                  نمایش 
              1
                  تا
              ${
                !!category ? products.length : displayed.length
              }

              - (${
                !!category ? itemsPerPage : displayed.length
              }) مورد
                `}
            </div>
          </div>
          <div className="filteration__left flex items-center gap-x-5 lg:gap-x-7">
            <div className="flex flex-col lg:flex-row items-start lg:items-center font-DanaDemi lg:gap-x-5">
              <label className="text-base lg:text-sm" htmlFor="filter-number">
                تعداد
              </label>
              <input
                id="filter-number"
                type="number"
                placeholder={8}
                min={8}
                max={products.length}
                value={itemsPerPage}
                onChange={(e) => {setItemsPerPage(e.target.value);setCurrentPage(1)}}
                className="filteration_amount w-20 py-3 px-[18px] lg:w-[85px] lg:py-3 lg:px-5 text-slate-900 placeholder:text-gray-2 rounded-xl"
                disabled={!!category}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center font-DanaDemi lg:gap-x-5">
              <label className="text-base lg:text-sm" htmlFor="filter-category">
                مرتب سازی بر اساس
              </label>
              <select onChange={categoryChangeHandler} className="py-3 px-[18px] lg:py-3 lg:px-5 bg-white rounded-xl">
                <option value="default" selected>---- انتخاب کنید ----</option>
                <option value="price">بر اساس قیمت</option>
                <option value="newest">جدیدترین محصولات</option>
                <option value="discount">محصولات تخفیفی</option>
                <option value="favorite">محبوب ترین ها</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="products py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="products__header container flex flex-col items-center justify-center text-center py-4 lg:py-6 rounded-xl gap-y-3.5 sm:gap-y-6 lg:gap-y-12"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="products__content container flex items-center justify-center flex-wrap gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-10 mt-8 sm:mt-12 lg:mt-6 transition-all duration-200"
        >
          {!displayed.length ? (
            <RotatingLines strokeColor="#B88E2F" strokeWidth="1.5" />
          ) : (
            displayed.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
          )}
        </div>
      </div>
      <div className="pagintaion-buttons py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div className="container flex items-center justify-center gap-x-8">
          <Pagination count={pagintaionCount} hideNextButton hidePrevButton defaultPage={1} onChange={changePageHandler} size="large" variant="outlined" />
        </div>
      </div>
    </>
  );
}

export default Shop;
