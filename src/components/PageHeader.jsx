import { BiChevronLeft } from "react-icons/bi"
import { Link } from "react-router-dom"

function PageHeader({title}) {
  return (
    <div className="bg-shop bg-cover bg-no-repeat w-full h-[220px] lg:h-[356px] flex flex-col items-center justify-center gap-y-6 lg:gap-y-5">
    <h1
      data-aos="fade-right"
      data-aos-duration="2000"
      className="font-MorabaMedium text-4xl lg:text-5xl"
    >
      {title}
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
      <span className="text-base">{title}</span>
    </div>
  </div>
  )
}

export default PageHeader