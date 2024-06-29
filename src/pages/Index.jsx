import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { RotatingLines } from "react-loader-spinner";

import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";

function Index() {
  const products = useProducts();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="landing-section lg:landing-section-none bg-landing bg-no-repeat bg-cover h-[300px] sm:h-[500px] lg:h-[780px] overflow-hidden">
        <div className="container relative h-full flex justify-center items-center lg:justify-normal">
          {/* //How displays in desktop mode =: a box with background and a button */}
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="bg-primary-2 hidden lg:flex flex-col items-start lg:gap-y-5 lg:py-20 lg:px-12 rounded-xl"
          >
            <h1 className="font-DanaDemi text-base">جدیدترین تولید</h1>
            <h2 className="font-MorabaMedium text-primary-1 lg:my-2.5 text-[33px] lg:text-5xl lg:max-w-[550px]">
              جدیدترین کلکسیون ما رو کشف کنید
            </h2>
            <span className="text-lg tracking-tight lg:max-w-[546px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </span>
            <button className="bg-primary-1 text-white font-MorabaBold lg:px-16 lg:py-6 rounded-xl">
              همین حالا بخرید
            </button>
          </div>
          {/* How displays in mobile and tablet mode : typeWritter effect */}
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="w-full flex lg:hidden flex-col justify-center items-center gap-y-8 text-center h-full rounded-xl px-7 py-12"
          >
            <span className="font-MorabaMedium text-primary-1 text-3xl sm:text-5xl/[60px]">
              <Typewriter
                words={"جدیدترین کلکسیون ما رو کشف کنید".split("-")}
                cursorStyle="|"
                typeSpeed={100}
              />
            </span>
            <span className="text-base sm:text-lg text-white">
              <Typewriter
                words={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.".split(
                  "-"
                )}
                delaySpeed={100}
                cursorStyle="|"
                typeSpeed={50}
                loop
              />
            </span>
            <button className="font-MorabaMedium text-white text-sm sm:text-lg bg-primary-1/90 hover:bg-primary-1 px-5 py-3.5 sm:px-8 sm:py-4.5 rounded-xl transition-all duration-200">
              همین حالا خرید کنید
            </button>
          </div>
        </div>
      </div>
      <div className="browse-product py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="browse-product__header container flex flex-col items-center justify-center text-center py-4 lg:py-6 rounded-xl gap-y-3.5 sm:gap-y-6 lg:gap-y-12"
        >
          <h1 className="font-MorabaBold text-2xl sm:text-3xl lg:text-4xl">
            دسته بندی هارو مرور کنید
          </h1>
          <span className="font-DanaDemi text-gray-500 text-sm sm:text-base lg:text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.{" "}
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="browse-product__content container flex items-center justify-center flex-wrap lg:flex-nowrap gap-x-4 gap-y-6 lg:gap-x-16 mt-8 sm:mt-12 lg:mt-6"
        >
          <div className="flex flex-col justify-center gap-y-4 sm:gap-y-4.5 lg:gap-y-6 text-center">
            <img
              className="browse-product__image w-30 sm:w-[270px] lg:w-auto rounded-xl"
              alt="image"
              src="./src/assets/images/range/dining.png"
            />
            <h1 className="font-DanaDemi text-base lg:text-lg">ناهار خوری</h1>
          </div>
          <div className="flex flex-col justify-center gap-y-4 sm:gap-y-4.5 lg:gap-y-6 text-center">
            <img
              className="browse-product__image w-30 sm:w-[270px] lg:w-auto rounded-xl"
              alt="image"
              src="./src/assets/images/range/livingroom.png"
            />
            <h1 className="font-DanaDemi text-base lg:text-lg">پذیرایی</h1>
          </div>
          <div className="flex flex-col justify-center gap-y-4 sm:gap-y-4.5 lg:gap-y-6 text-center">
            <img
              className="browse-product__image w-30 sm:w-[270px] lg:w-auto rounded-xl"
              alt="image"
              src="./src/assets/images/range/bedroom.png"
            />
            <h1 className="font-DanaDemi text-base lg:text-lg">اتاق خواب</h1>
          </div>
        </div>
      </div>
      <div className="products py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="products__header container flex flex-col items-center justify-center text-center py-4 lg:py-6 rounded-xl gap-y-3.5 sm:gap-y-6 lg:gap-y-12"
        >
          <h1 className="font-MorabaBold text-2xl sm:text-3xl lg:text-4xl">
            محصولات ما
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="products__content container flex items-center justify-center flex-wrap gap-x-4 gap-y-6 lg:gap-x-16 lg:gap-y-8 mt-8 sm:mt-12 lg:mt-6 transition-all duration-200"
        >
          {!products.length ? (
            <RotatingLines strokeColor="#B88E2F" strokeWidth="1.5" />
          ) : (
            products
              .slice(0, 8)
              .map((product) => <ProductCard key={product.id} data={product} />)
          )}
        </div>
        <div className="container flex items-center justify-center text-lg font-DanaDemi mt-10 sm:mt-8">
          <Link
            to="/shop"
            title="فروشگاه"
            className="header_link bg-white text-primary-1 hover:bg-primary-1 hover:text-white border-2 border-primary-1 px-8 py-2.5 sm:py-3.5 lg:px-12 lg:py-3.5 rounded-xl transition-all duration-200 delay-100"
          >
            مشاهده بیشتر
          </Link>
        </div>
      </div>
      <div className="sliderSection bg-primary-3 py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div className="container flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap">
          <div data-aos="fade-down" data-aos-duration="2000" className="sliderSection__right flex flex-col justify-center items-center">
            <div className="flex flex-col lg:items-start gap-y-3.5 lg:gap-y-2.5 text-center lg:text-right max-w-full lg:max-w-[422px]">
              <h1 className="font-DanaDemi text-3xl lg:text-4xl">
                50+ چیدمان اتاق زیبا و الهام بخش
              </h1>
              <span className="text-sm sm:text-base lg:text-lg text-[#616161] md:text-lg">
                طراح ما قبلاً نمونه های اولیه بسیار زیبایی از اتاق ها ساخته است
                که الهام بخش شما هستند
              </span>
            </div>
            <button className="font-MorabaBold w-full bg-primary-1 text-white px-8 py-4.5 lg:px-9 lg:py-6 rounded-xl mt-8 lg:mt-16">
              بیشتر بگردید
            </button>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="sliderSection__left mt-10 lg:mt-0">
            <Swiper className="max-w-[350px] lg:max-w-[800px]"
              spaceBetween={50}
              slidesPerView={2}
              loop
            >
              <SwiperSlide>
                <img src="./src/assets/images/slider/slider1.png" alt="slider-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./src/assets/images/slider/slider2.png" alt="slider-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./src/assets/images/slider/slider1.png" alt="slider-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./src/assets/images/slider/slider2.png" alt="slider-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="shareRoomByHashtag py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div className="container flex flex-col gap-y-6 lg:gap-y-8 items-center justify-center">
          <div className="shareRoom_header flex flex-col gap-y-1.5 lg:gap-y-2.5 text-center">
            <h1 data-aos="fade-right" data-aos-duration="2000" className="text-[#616161] sm:text-base lg:text-xl">چیدمان اتاق خودتون رو به اشتراک بزارید با</h1>
            <h2 data-aos="fade-left" data-aos-duration="2000" dir="ltr" className="font-MorabaBold text-slate-800  text-3xl lg:text-4xl">#FurniroFurniture</h2>
          </div>
          <img data-aos="fade-up" data-aos-duration="2000" alt="share room " src="./src/assets/images/share.png" />
        </div>
      </div>
    </>
  );
}

export default Index;
