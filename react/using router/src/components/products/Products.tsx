import { Link } from "react-router-dom";
import { ProductsProps, product } from "../../types/productTypes";

export default function Products({ productsToShow }: ProductsProps) {
    return (
        <>
            <div>
                <ul>
                    {productsToShow.map((product: product) =>
                        <li key={product.id}><Link to={`/item/${product.id}`}>{product.name} | {product.price}</Link></li>
                    )}
                </ul>
            </div>
        </>
    )
}
