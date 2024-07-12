import { useParams } from "react-router-dom";
import { useProductDetail } from "../context/ProductContext";
import { RotatingLines } from "react-loader-spinner";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const productDetail = useProductDetail(+id)

  if (!productDetail) return <RotatingLines strokeColor="#B88E2F" strokeWidth="1.5" />
  const [cart , dispatch] = useCart();

  console.log(cart)

  return <>
    <div className="container">
      <div className="py-10 sm:py-16">
        <div className="bg-red-600">{Number(cart.total).toLocaleString()}</div>
      </div>
    </div>
  </>;
}

export default ProductDetail;
