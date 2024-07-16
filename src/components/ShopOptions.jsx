import { LuTrophy } from "react-icons/lu";
import { HiCheckBadge } from "react-icons/hi2";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

function ShopOptions() {
  return (
    <div className="bg-primary-5 w-full flex flex-wrap xl:flex-nowrap sm:justify-evenly sm:items-center gap-10 py-14 px-12 lg:py-25 lg:px-14">
      <div data-aos="fade-down" data-aos-duration="2000" className="w-full sm:w-[271px] lg:w-[400px] flex items-center gap-x-3 lg:gap-x-2.5">
        <LuTrophy size={60} />
        <div className="flex flex-col items-start lg:gap-y-0.5">
          <h1 className="font-DanaDemi text-xl lg:text-2xl">کیفیت بالا</h1>
          <h2 className="text-gray-2 text-base lg:text-xl">
            ساخته شده از بهترین مواد اولیه
          </h2>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="2000" className="w-full sm:w-[271px] lg:w-[400px] flex justify-end sm:justify-normal items-center gap-x-3 lg:gap-x-2.5">
        <HiCheckBadge size={60} />
        <div className="flex flex-col items-start lg:gap-y-0.5">
          <h1 className="font-DanaDemi text-xl lg:text-2xl">ضمانت کارکرد</h1>
          <h2 className="text-gray-2 text-base lg:text-xl">
            تا ۲ سال پس از خرید
          </h2>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full sm:w-[271px] lg:w-[400px] flex items-center gap-x-3 lg:gap-x-2.5">
        <MdOutlineLocalShipping size={60} />
        <div className="flex flex-col items-start lg:gap-y-0.5">
          <h1 className="font-DanaDemi text-xl lg:text-2xl">ارسال رایگان</h1>
          <h2 className="text-gray-2 text-base lg:text-xl">
            سفارشات بالای ۵ میلیون
          </h2>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full sm:w-[271px] lg:w-[400px] flex justify-end sm:justify-normal items-center gap-x-3 lg:gap-x-2.5">
        <MdSupportAgent size={60} />
        <div className="flex flex-col items-start lg:gap-y-0.5">
          <h1 className="font-DanaDemi text-xl lg:text-2xl">پشتیبانی 24 / 7</h1>
          <h2 className="text-gray-2 text-base lg:text-xl">توسط افراد مجرب</h2>
        </div>
      </div>
    </div>
  );
}

export default ShopOptions;
