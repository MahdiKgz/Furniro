import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center gap-y-3.5 lg:gap-y-5">
      <h1 className='font-MorabaBold text-5xl text-primary-1'>404</h1>
      <span className="font-MorabaMedium text-2xl text-primary-1">صفحه مورد نظر پیدا نشد</span>
      <Link to="/" replace className='font-MorabaMedium px-8 py-2.5 text-white bg-primary-1 rounded-xl'>بازگشت به صفحه اصلی</Link>
    </div>
  )
}

export default NotFound