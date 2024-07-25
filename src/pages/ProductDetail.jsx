import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import { BiChevronLeft } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import image from "../assets/images/ProductDetails/productDetail1.png";
import image2 from "../assets/images/ProductDetails/productDetail2.png";
import image3 from "../assets/images/ProductDetails/productDetail3.png";
import image4 from "../assets/images/ProductDetails/productDetail4.png";
import image5 from "../assets/images/ProductDetails/productDetail5.png";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useProductDetail, useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { paginateItems } from "../helpers/funcs/shared";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  const [imageSrc, setImageSrc] = useState(image);
  const [value, setValue] = useState(1);
  const [productColor, setProductColor] = useState("#B88E2F");
  const [productSize, setProductSize] = useState("XS");

  const { id } = useParams();

  const [state, dispatch] = useCart();
  const products = useProducts();
  const productDetail = useProductDetail(+id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleActiveClassSize = () => {
    const sizeButtons = document.querySelectorAll(".sizeButton")
    sizeButtons.forEach(sizeButton => {
      sizeButton.addEventListener('click' , (e) => {
        sizeButtons.forEach(otherButtons => {
          otherButtons.classList.remove("activeButton")
        })
        e.target.classList.add("activeButton")
      })
    })
  }
  const handleActiveColor = () => {
    const sizeButtons = document.querySelectorAll(".colorButtons")
    sizeButtons.forEach(sizeButton => {
      sizeButton.addEventListener('click' , (e) => {
        sizeButtons.forEach(otherButtons => {
          otherButtons.classList.remove("activeColor")
        })
        e.target.classList.add("activeColor")
      })
    })
  }

  const productOrder = {
    ...productDetail,
    productColor,
    productSize,
  };

  useEffect(() => {
    handleActiveClassSize()
    handleActiveColor()
  }, []);

  if (!productDetail)
    return <RotatingLines strokeColor="#B88E2F" strokeWidth="1.5" />;

  return (
    <>
      <section className="productDetail__breadcrumb py-10 lg:py-5 bg-primary-4">
        <div>
          <div className="container font-DanaMedium flex justify-center lg:justify-normal items-center gap-x-2 lg:gap-x-2.5">
            <Link
              className="text-gray-600 hover:text-slate-900 transition-all duration-200 delay-75"
              to="/"
            >
              خانه
            </Link>
            <BiChevronLeft size={20} />
            <Link
              className="text-gray-600 hover:text-slate-900 transition-all duration-200 delay-75"
              to="/shop"
            >
              فروشگاه
            </Link>
            <BiChevronLeft size={20} />
            <span>{productDetail.title}</span>
          </div>
        </div>
      </section>
      <section className="productDetail__main container flex flex-col lg:flex-row items-center justify-center gap-y-16 lg:gap-x-[105px] lg:justify-normal lg:items-start py-16 lg:py-9 lg:pb-14 border-b-2 border-b-[#D9D9D9]">
        <div className="product__main-right lg:h-[572px] flex flex-col-reverse gap-y-10 items-center lg:items-start lg:flex-row lg:gap-x-8">
          <div className="product__main-right-small w-full h-full lg:w-fit flex flex-wrap justify-center items-center flex-row gap-x-1.5 sm:gap-x-12 lg:flex-col gap-y-4 lg:gap-y-8">
            <div className="bg-primary-4 hover:bg-primary-1/75 hover:cursor-pointer flex justify-center items-center w-20 lg:w-[76px] h-20 transition-all duration-150 delay-75 rounded-xl">
              <img
                onClick={() => setImageSrc(image2)}
                src={image2}
                alt="productCover"
              />
            </div>
            <div className="bg-primary-4 hover:bg-primary-1/75 hover:cursor-pointer flex justify-center items-center w-20 lg:w-[76px] h-20 transition-all duration-150 delay-75 rounded-xl">
              <img
                onClick={() => setImageSrc(image3)}
                src={image3}
                alt="productCover"
              />
            </div>
            <div className="bg-primary-4 hover:bg-primary-1/75 hover:cursor-pointer flex justify-center items-center w-20 lg:w-[76px] h-20 transition-all duration-150 delay-75 rounded-xl">
              <img
                onClick={() => setImageSrc(image4)}
                src={image4}
                alt="productCover"
              />
            </div>
            <div className="bg-primary-4 hover:bg-primary-1/75 hover:cursor-pointer flex justify-center items-center w-20 lg:w-[76px] h-20 transition-all duration-150 delay-75 rounded-xl">
              <img
                onClick={() => setImageSrc(image5)}
                src={image5}
                alt="productCover"
              />
            </div>
            <div className="bg-primary-4 hover:bg-primary-1/75 hover:cursor-pointer flex justify-center items-center w-20 lg:w-[76px] h-20 transition-all duration-150 delay-75 rounded-xl">
              <img
                onClick={() => setImageSrc(image)}
                src={image}
                alt="productCover"
              />
            </div>
          </div>
          <div className="product__main-right-activeImage flex items-center justify-center bg-primary-4 w-full sm:w-[488px] lg:!w-[423px] h-full rounded-xl">
            <img src={imageSrc} alt="productCover" />
          </div>
        </div>
        <div className="product__main-left w-full">
          <div className="product__main-left-head flex flex-col items-start lg:gap-y-4">
            <div className="flex w-full flex-col lg:items-start text-right">
              <h1 className="lg:text-4xl text-3xl">{productDetail.title}</h1>
              {productDetail.discount.isAvailable ? (
                <div className="flex items-center gap-x-2.5 lg:gap-x-2  mt-1.5 sm:mt-2 lg:mt-2.5">
                  <h2 className="font-DanaMedium sm:text-xl text-xl">
                    {(
                      productDetail.price -
                      (productDetail.price * productDetail.discount.amount) /
                        100
                    ).toLocaleString()}{" "}
                    تومان
                  </h2>
                  <h3 className="font-DanaMedium discount__price text-gray-2 text-sm lg:text-base">
                    {productDetail.price.toLocaleString()} تومان
                  </h3>
                </div>
              ) : (
                <h2 className="font-DanaMedium text-slate-800 text-base sm:text-xl mt-1.5 sm:mt-2 lg:mt-2.5">
                  {productDetail.price.toLocaleString()}تومان
                </h2>
              )}
            </div>
            <div className="product__main-left-rating flex items-center gap-x-2.5 lg:gap-x-4.5 mt-6 sm:mt-5 lg:mt-4">
              <div dir="ltr" className="flex items-center gap-x-1.5 lg:gap-x-2">
                <MdOutlineStar size={23} fill="#FFC700" />
                <MdOutlineStar size={23} fill="#FFC700" />
                <MdOutlineStar size={23} fill="#FFC700" />
                <MdOutlineStar size={23} fill="#FFC700" />
                <MdOutlineStarHalf size={23} fill="#FFC700" />
              </div>
              <div className="overview pr-3.5 lg:pr-[22px] border-r-2 border-r-[#9F9F9F]">
                <span className="font-DanaMedium text-sm sm:text-base text-[#9F9F9F]">
                  5 باز نقد توسط مشتریان
                </span>
              </div>
            </div>
          </div>
          <div className="product__main-left-body flex flex-col items-start lg:gap-y-5 mt-3.5 lg:mt-3 lg:pb-[60px] lg:border-b-2 lg:border-b-[#D9D9D9]">
            <span className="font-DanaMedium w-full lg:max-w-[556px] text-lg">
              Kilburn که میله را به عنوان یکی از بلندترین بلندگوها در کلاس خود
              تنظیم می کند، یک قهرمان جمع و جور و خوش قلب با صدای متعادلی است که
              میدرنج واضح و بلندی های طولانی برای صدا دارد.
            </span>
            <div className="product__main-size w-full flex flex-col items-start gap-y-6 lg:gap-y-3 mt-4">
              <h1 className="text-[#9F9F9F] text-xl lg:text-lg">سایز</h1>
              <div className="flex items-center gap-x-2.5 lg:gap-x-4 child:font-MorabaMedium child:w-10 child:h-10 child:px-3 child:py-1 child:bg-primary-4 child:rounded-md">
                <button
                  onClick={(e) => setProductSize(e.target.innerText)}
                  className="sizeButton hover:bg-primary-1 hover:text-white transition-all duration-150 delay-75"
                >
                  L
                </button>
                <button
                  onClick={(e) => setProductSize(e.target.innerText)}
                  className="sizeButton hover:bg-primary-1 hover:text-white transition-all duration-150 delay-75"
                >
                  XL
                </button>
                <button
                  onClick={(e) => setProductSize(e.target.innerText)}
                  className="sizeButton hover:bg-primary-1 hover:text-white transition-all duration-150 delay-75"
                >
                  XS
                </button>
              </div>
            </div>
            <div className="product__main-color w-full flex flex-col items-start gap-y-6 lg:gap-y-3 mt-6">
              <h1 className="text-[#9F9F9F] text-xl lg:text-lg">رنگ</h1>
              <div className="flex items-center gap-x-2.5 lg:gap-x-4">
                <span
                  onClick={(e) => setProductColor("#816DFA")}
                  className="colorButtons w-10 h-10 lg:w-[30px] lg:h-[30px] rounded-full bg-[#816DFA]"
                ></span>
                <span
                  onClick={(e) => setProductColor("#000000")}
                  className="colorButtons w-10 h-10 lg:w-[30px] lg:h-[30px] rounded-full bg-black"
                ></span>
                <span
                  onClick={(e) => setProductColor("#B88E2F")}
                  className="colorButtons w-10 h-10 lg:w-[30px] lg:h-[30px] rounded-full bg-primary-1"
                ></span>
              </div>
            </div>
            <div className="product__main-submit w-full flex items-center gap-x-1.5 lg:gap-x-4 mt-8">
              {/* <div className="product-quantity py-2.5 px-6 sm:py-3.5 sm:px-7 lg:py-4 lg:px-12 border-2 opacity-35 border-black rounded-xl">
                <button
                // onClick={() =>
                //   dispatch({ type: "INCREASE", payload: productDetail })
                // }
                >
                  +
                </button>
                <span>1</span>
                <button
                // onClick={() =>
                //   dispatch({ type: "DECREASE", payload: productDetail })
                // }
                >
                  -
                </button>
              </div> */}
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productOrder })
                }
                className="py-2.5 px-6 sm:py-3.5 sm:px-7 lg:py-4 lg:px-12 border-2 border-black rounded-xl"
              >
                افزودن به سبد خرید
              </button>
              <Link
                to="/compare"
                className="py-2.5 px-6 sm:py-3.5 sm:px-7 lg:py-4 lg:px-12 border-2 border-black rounded-xl"
              >
                مقایسه
              </Link>
            </div>
          </div>
          <div className="product__main-left-footer flex flex-col items-start gap-y-2.5 lg:gap-y-3 pt-12 lg:pt-10 px-4 lg:px-3.5 text-gray-2 text-base">
            <span>شماره سریال : SS0011</span>
            <span>دسته بندی : {productDetail.category}</span>
            <span>
              تگ ها : مبلمان , میز ,خانه , فروشگاه ,{productDetail.category}
            </span>
            <div className="share_product flex items-center gap-x-3.5 lg:gap-x-6">
              <span className="text-gray-2">اشتراک گذاری : </span>
              <FaFacebook fill="000000" size={20} />
              <FaLinkedin fill="000000" size={20} />
              <RiTwitterXFill fill="000000" size={20} />
            </div>
          </div>
        </div>
      </section>
      <section className="product__tabPannel container py-8 lg:py-12">
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} centered>
                <Tab label="توضیحات" value="1" />
                <Tab label="موارد دیگر" value="2" />
                <Tab label="[5] بازنقد مشتریان" value="3" />
              </TabList>
            </Box>
            <TabPanel value={value}>
              <div className="text-gray-2 font-DanaMedium text-base lg:text-lg flex flex-col items-start gap-y-3.5 lg:gap-y-7">
                <p className="indent-2">
                  اسپیکر استریو فعال قابل حمل Kilburn که روح خام و متمرد راک اند
                  رول را تجسم می بخشد، ظاهر و صدای بی نظیر مارشال را به خود می
                  گیرد، آکوردها را از برق جدا می کند و نمایش را در جاده می برد.
                </p>
                <p className="indent-2">
                  Kilburn با وزن کمتر از 7 پوند، یک قطعه سبک وزن از مهندسی سبک
                  قدیمی است. Kilburn که میله را به عنوان یکی از بلندترین
                  بلندگوها در کلاس خود تنظیم می کند، یک قهرمان جمع و جور و خوش
                  قلب با صدایی متعادل است که دارای میان رده واضح و بلندی های
                  بلند برای صدایی است که هم گویا و هم تلفظ می شود. دستگیره های
                  آنالوگ به شما این امکان را می دهد که کنترل ها را مطابق با
                  ترجیحات شخصی خود تنظیم کنید در حالی که بند چرمی متاثر از گیتار
                  امکان سفر آسان و شیک را فراهم می کند.
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="text-gray-2 font-DanaMedium text-base lg:text-lg flex flex-col items-start gap-y-3.5 lg:gap-y-7">
                <p className="indent-2">
                  اسپیکر استریو فعال قابل حمل Kilburn که روح خام و متمرد راک اند
                  رول را تجسم می بخشد، ظاهر و صدای بی نظیر مارشال را به خود می
                  گیرد، آکوردها را از برق جدا می کند و نمایش را در جاده می برد.
                </p>
                <p className="indent-2">
                  Kilburn با وزن کمتر از 7 پوند، یک قطعه سبک وزن از مهندسی سبک
                  قدیمی است. Kilburn که میله را به عنوان یکی از بلندترین
                  بلندگوها در کلاس خود تنظیم می کند، یک قهرمان جمع و جور و خوش
                  قلب با صدایی متعادل است که دارای میان رده واضح و بلندی های
                  بلند برای صدایی است که هم گویا و هم تلفظ می شود. دستگیره های
                  آنالوگ به شما این امکان را می دهد که کنترل ها را مطابق با
                  ترجیحات شخصی خود تنظیم کنید در حالی که بند چرمی متاثر از گیتار
                  امکان سفر آسان و شیک را فراهم می کند.
                </p>
                <p className="indent-2">
                  Kilburn با وزن کمتر از 7 پوند، یک قطعه سبک وزن از مهندسی سبک
                  قدیمی است. Kilburn که میله را به عنوان یکی از بلندترین
                  بلندگوها در کلاس خود تنظیم می کند، یک قهرمان جمع و جور و خوش
                  قلب با صدایی متعادل است که دارای میان رده واضح و بلندی های
                  بلند برای صدایی است که هم گویا و هم تلفظ می شود. دستگیره های
                  آنالوگ به شما این امکان را می دهد که کنترل ها را مطابق با
                  ترجیحات شخصی خود تنظیم کنید در حالی که بند چرمی متاثر از گیتار
                  امکان سفر آسان و شیک را فراهم می کند.
                </p>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="text-gray-2 font-DanaMedium text-base lg:text-lg flex flex-col items-start gap-y-3.5 lg:gap-y-7">
                <p className="indent-2">
                  اسپیکر استریو فعال قابل حمل Kilburn که روح خام و متمرد راک اند
                  رول را تجسم می بخشد، ظاهر و صدای بی نظیر مارشال را به خود می
                  گیرد، آکوردها را از برق جدا می کند و نمایش را در جاده می برد.
                </p>
                <p className="indent-2">
                  Kilburn با وزن کمتر از 7 پوند، یک قطعه سبک وزن از مهندسی سبک
                  قدیمی است. Kilburn که میله را به عنوان یکی از بلندترین
                  بلندگوها در کلاس خود تنظیم می کند، یک قهرمان جمع و جور و خوش
                  قلب با صدایی متعادل است که دارای میان رده واضح و بلندی های
                  بلند برای صدایی است که هم گویا و هم تلفظ می شود. دستگیره های
                  آنالوگ به شما این امکان را می دهد که کنترل ها را مطابق با
                  ترجیحات شخصی خود تنظیم کنید در حالی که بند چرمی متاثر از گیتار
                  امکان سفر آسان و شیک را فراهم می کند.
                </p>
                <p className="indent-2">
                  Kilburn با وزن کمتر از 7 پوند، یک قطعه سبک وزن از مهندسی سبک
                  قدیمی است. Kilburn که میله را به عنوان یکی از بلندترین
                  بلندگوها در کلاس خود تنظیم می کند، یک قهرمان جمع و جور و خوش
                  قلب با صدایی متعادل است که دارای میان رده واضح و بلندی های
                  بلند برای صدایی است که هم گویا و هم تلفظ می شود. دستگیره های
                  آنالوگ به شما این امکان را می دهد که کنترل ها را مطابق با
                  ترجیحات شخصی خود تنظیم کنید در حالی که بند چرمی متاثر از گیتار
                  امکان سفر آسان و شیک را فراهم می کند.
                </p>
                <p className="indent-2">
                  Kilburn با وزن کمتر از 7 پوند، یک قطعه سبک وزن از مهندسی سبک
                  قدیمی است. Kilburn که میله را به عنوان یکی از بلندترین
                  بلندگوها در کلاس خود تنظیم می کند، یک قهرمان جمع و جور و خوش
                  قلب با صدایی متعادل است که دارای میان رده واضح و بلندی های
                  بلند برای صدایی است که هم گویا و هم تلفظ می شود. دستگیره های
                  آنالوگ به شما این امکان را می دهد که کنترل ها را مطابق با
                  ترجیحات شخصی خود تنظیم کنید در حالی که بند چرمی متاثر از گیتار
                  امکان سفر آسان و شیک را فراهم می کند.
                </p>
              </div>
            </TabPanel>
          </TabContext>
        </Box>

        <div className="product_tabPannel-images flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-6 lg:gap-x-[29px]">
          <div className="bg-primary-4 lg:w-[605px] lg:h-[348px] rounded-xl">
            <img
              src="../src/assets/images/ProductDetails/productDetail6.png"
              alt="tabPannelImage"
            />
          </div>
          <div className="bg-primary-4 lg:w-[605px] lg:h-[348px] rounded-xl">
            <img
              src="../src/assets/images/ProductDetails/prodtctDetail7.png"
              alt="tabPannelImage"
            />
          </div>
        </div>
      </section>
      <section className="related__product container flex flex-col items-center justify-center text-center py-4 lg:py-16 gap-y-3.5 sm:gap-y-6 lg:gap-y-12 border-t-2 border-t-[#D9D9D9]">
        <h1 className="font-MorabaBold mt-6 sm:mt-5 lg:mt-10 text-2xl sm:text-3xl lg:text-4xl">
          محصولات مرتبط
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-10 mt-8 sm:mt-12 lg:mt-6 transition-all duration-200">
          {products.slice(0, 4).map((pr) => (
            <ProductCard key={pr.id} data={pr} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
