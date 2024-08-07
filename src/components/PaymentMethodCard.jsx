import { Link } from "react-router-dom";

function PaymentMethodCard({ info }) {
  return (
    <div className="flex w-full items-center justify-between">
      <Link
        to={`/shop/${info.id}`}
        className="text-lg font-DanaMedium text-gray-2"
      >
        {info.title}
      </Link>
      {info.discount.isAvailable ? (
        <span className="text-base  font-DanaMedium lg:text-sm">
          {(info.price - (info.price * info.discount.amount) / 100).toLocaleString()}{" "}
          تومان
        </span>
      ) : (
        <span className="text-base  font-DanaMedium lg:text-sm">
          {info.price.toLocaleString()} تومان
        </span>
      )}
    </div>
  );
}

export default PaymentMethodCard;
