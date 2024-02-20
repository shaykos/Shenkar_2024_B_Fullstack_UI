import { useState, useContext } from "react"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext";
import { product } from "../types/productTypes";

export default function Store() {

    const { products } = useContext<any>(ProductsContext);

    return (
        <>
            <Nav />
            <div>
                <ul>
                    {products.map((product: product) =>
                        <li><Link to={`/item/${product.id}`}>{product.name}</Link></li>
                    )}
                </ul>
            </div>
        </>
    )
}
