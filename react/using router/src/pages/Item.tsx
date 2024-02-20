import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext";
import { product } from "../types/productTypes";


export default function Item() {
  const { id } = useParams();
  const { products } = useContext<any>(ProductsContext);
  
  //Number(id) --> casting 
  //null בתוך הפרודקט אנחנו שמים את האובייקט המתאים ממערך המוצרים או 
  const [product] = useState<product | null>(products.find((product: product) => product.id == Number(id)));

  if (!product)
    return (
      <>
        <h1>Not found</h1>
        <Link to='/'>Home</Link>
      </>
    )

  return (
    <div>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
    </div>
  )
}