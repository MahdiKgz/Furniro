import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TbUserExclamation } from "react-icons/tb";
import { ImSearch } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

import AOS from "aos";
import "aos/dist/aos.css";

import { handleMobileMenu, toggleActiveLinks , validateEmail } from "../helpers/funcs/shared";

import icon from "../assets/icons/mainLogo.png";
import toast, { Toaster } from "react-hot-toast";

function InedexLayout({ children }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.addEventListener('load' , () => navigate("/"))
    AOS.init()
    toggleActiveLinks();
    handleMobileMenu();
  }, []);


  const submitNewLetterHandler = async () => {
    if(email && validateEmail(email)){
      toast.success("ایمیل شما ثبت شد")
    }
    else{
      toast.error("لطفا ایمیل معتبر وارد کنید")
      setEmail(email => setEmail(""))
    }
  };

  return (
    <>
      <Toaster />
      <header className="bg-white flex justify-center items-center w-full md:h-25 py-6 px-4 sm:py-6 sm:px-3.5 md:py-6 md:px-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center md:gap-x-2">
            <img className="header__main-logo" alt="main logo" src={icon} />
            <Link to="/" className="font-MorabaBold text-xl md:text-3xl">
              فرنیرو
            </Link>
          </div>
          <div className="hidden lg:block lg:w-[420px]">
            <ul className="header-nav_links flex items-center justify-between child:font-DanaMedium child:py-4 child:border-b-2 child:border-b-transparent child:transition-all child:duration-200">
              <Link title="خانه" className="header_link" to="/" replace>
                خانه
              </Link>
              <Link title="فروشگاه" className="header_link" to="/shop">
                فروشگاه
              </Link>
              <Link title="درباره" className="header_link" to="/about">
                درباره
              </Link>
              <Link title="ارتباط" className="header_link" to="/contact">
                ارتباط با ما
              </Link>
            </ul>
          </div>
          <div className="iconed-links hidden lg:flex items-center justify-between md:w-[250px]">
            <Link title="ورود" className="header_link" to="/login">
              <TbUserExclamation size={23} />
            </Link>
            <button>
              <ImSearch size={23} />
            </button>
            <BsHeart size={23} />
            <Link title="سبد خرید" className="header_link" to="/checkout">
              <MdOutlineShoppingCart size={23} />
            </Link>
          </div>
          <div className="mobile-menu p-3.5 rounded-full bg-gray-100/50 lg:hidden">
            <HiBars3BottomLeft className="mobile-menu__toggler" size={24} />
          </div>
        </div>
        <div
          id="mobileMenu"
          className="fixed right-0 top-0 w-64 h-screen bg-white hidden !md:hidden px-3.5 py-8 z-30 rounded-e-md"
        >
          <div className="mobile-menu__header flex items-center justify-between w-full">
            <Link to="/" replace className="flex items-center gap-x-1.5">
              <img
                className="mobile-menu__link w-10 h-7"
                alt="logo"
                src={icon}
              />
              <span className="font-MorabaBold text-xl">فرنیرو</span>
            </Link>
            <HiXMark className="close-btn ml-3" size={24} />
          </div>

          <div className="mobile-menu__links">
            <ul className="flex flex-col items-start gap-y-6 mt-16 mr-5 child:w-full child:py-2.5 child:border-b-2 child:border-b-transparent child:transition-all child:duration-200">
              <li className="mobile-menu__link px-3.5 rounded-md">
                <Link
                  className="header_link text-lg block w-full py-2.5 px-3 rounded-md"
                  title="خانه"
                  to="/"
                  replace
                >
                  خانه
                </Link>
              </li>
              <li className="mobile-menu__link px-3.5 rounded-md">
                <Link
                  className="header_link text-lg block w-full py-2.5 px-3 rounded-md"
                  title="فروشگاه"
                  to="/shop"
                >
                  فروشگاه
                </Link>
              </li>
              <li className="mobile-menu__link px-3.5 rounded-md">
                <Link
                  className="header_link text-lg block w-full py-2.5 px-3 rounded-md"
                  title="درباره"
                  to="/about"
                >
                  درباره
                </Link>
              </li>
              <li className="mobile-menu__link px-3.5 rounded-md">
                <Link
                  className="header_link text-lg block w-full py-2.5 px-3 rounded-md"
                  title="ارتباط"
                  to="/contact"
                >
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation-bar flex lg:hidden justify-evenly items-center fixed bottom-2 w-[90%] mx-auto bg-gray-100 py-2.5 child:w-[65px] child:transition-all child:duration-300 rounded-xl z-10">
          <Link
            to="/login"
            className="header_link flex flex-col justify-center items-center px-5 py-3.5 rounded-full"
          >
            <TbUserExclamation size={23} />
            <Link title="ورود" to="/login" className="text-xs sm:text-sm">
              ورود
            </Link>
          </Link>
          <Link className="flex flex-col justify-center items-center px-5 py-3.5  rounded-full">
            <ImSearch size={23} />
            <Link className="text-xs sm:text-sm">جستجو</Link>
          </Link>
          <Link
            to="/"
            replace
            title="خانه"
            className="header_link main-page flex flex-col justify-center items-center"
          >
            <img
              className="navigation-bar__logo w-12 h-10"
              alt="logo"
              src={icon}
            />
            <span className="font-Moraba text-xs sm:text-sm">صفحه اصلی</span>
          </Link>
          <Link
            title="علاقه مندی ها"
            className="header_link flex flex-col justify-center items-center px-5 py-3.5  rounded-full"
          >
            <BsHeart size={23} />
            <Link to="" className="text-xs sm:text-sm">
              پسندیده
            </Link>
          </Link>
          <Link
            title="سبد خرید"
            to="/checkout"
            className="header_link flex flex-col justify-center items-center px-5 py-3.5  rounded-full"
          >
            <MdOutlineShoppingCart size={23} />
            <Link title="سبد خرید" to="/checkout" className="text-xs">
              سبدخرید
            </Link>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-white flex justify-center items-center w-full h-auto pt-6 pb-16 px-4 sm:pt-6 sm:pb-20 sm:px-3.5 md:py-16 md:px-4">
        <div className="container w-full flex flex-wrap gap-y-10 items-start justify-between border-b-2 border-b-gray-300 lg:p-16 pb-8 sm:pb-10 md:pb-16">
          <div className="flex flex-col w-full lg:w-auto gap-y-3 md:gap-y-5 lg:gap-y-12">
            <h1 className="font-MorabaMedium text-2xl">فرنیرو</h1>
            <span className="text-gray-400 text-sm text-justify lg:max-w-[300px] indent-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </span>
          </div>
          <div className="quick_access flex items-start w-full sm:w-auto justify-between sm:justify-normal sm:gap-x-36 md:gap-x-30">
            <div className="flex flex-col items-start gap-y-6 lg:gap-y-12">
              <h1 className="font-MorabaMedium text-lg text-gray-400">
                پیوند ها
              </h1>
              <ul className="flex flex-col items-start gap-y-6 lg:gap-y-8">
                <li>
                  <Link title="خانه" to="/" replace className="header_link">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link title="فروشگاه" to="/shop" className="header_link">
                    فروشگاه
                  </Link>
                </li>
                <li>
                  <Link title="درباره" to="/about" className="header_link">
                    درباره
                  </Link>
                </li>
                <li>
                  <Link
                    title="ارتباط با ما"
                    to="/contact"
                    className="header_link"
                  >
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>
            <div className="quick_access flex flex-col items-start gap-y-6 lg:gap-y-12">
              <h1 className="font-MorabaMedium text-lg text-gray-400">
                صفحات کمکی
              </h1>
              <ul className="flex flex-col items-start gap-y-6 lg:gap-y-8">
                <li>
                  <Link title="پرداخت" className="header_link">
                    روش های پرداخت
                  </Link>
                </li>
                <li>
                  <Link title="مرجوعات" className="header_link">
                    مرجوعات
                  </Link>
                </li>
                <li>
                  <Link title="خط مشی حریم خصوصی" className="header_link">
                    خط مشی حریم خصوصی
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full sm:w-auto flex-col gap-y-6 lg:gap-y-12">
            <h1 className="font-MorabaMedium text-gray-400">خبرنامه</h1>
            <div className="w-full sm:w-auto flex items-center gap-x-2 lg:gap-x-3">
              <input
                type="email"
                className={`outline-none w-3/4 sm:w-auto py-2.5 px-3 border-b-2 ${validateEmail(email) || email === "" ? "border-b-black" : "border-b-red-500"} text-sm placeholder:text-sm placeholder:text-gray-500`}
                placeholder="ایمیل خودتو وارد کن"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={submitNewLetterHandler}
                className="outline-none w-1/4 sm:w-auto border-b-2 border-b-black px-3 py-2.5 hover:bg-black hover:rounded-md hover:text-white transition-all duration-300"
              >
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default InedexLayout;
