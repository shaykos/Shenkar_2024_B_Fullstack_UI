import { useState, useContext, useEffect } from "react"
import Nav from "../components/shared/Nav"
import { ProductsContext } from "../context/ProductsContext";
import { product } from "../types/productTypes";
import Products from "../components/products/Products";

export default function Store() {

    const { products } = useContext<any>(ProductsContext);
    const [productsToShow, setProductsToShow] = useState<product[]>([]);
    const [search, setSearch] = useState<string>('');

    /**
     * The function `sortByPrice` sorts products by price in either ascending or descending order based
     * on the `lowerFirst` parameter.
     * @param {boolean} lowerFirst - The `lowerFirst` parameter is a boolean value that determines
     * whether to sort the products in ascending order (if `lowerFirst` is true) or descending order
     * (if `lowerFirst` is false) based on their prices.
     */
    function sortByPrice(lowerFirst: boolean) {
        if (lowerFirst)
            //setProductsToShow((prev) => [...prev.sort((a, b) => a.price - b.price)]);
            setProductsToShow([...productsToShow.sort((a, b) => a.price - b.price)]);
        else
            //setProductsToShow((prev) => [...prev.sort((a, b) => b.price - a.price)]);
            setProductsToShow([...productsToShow.sort((a, b) => b.price - a.price)]);
    }

    useEffect(() => {
        if (search == '')
            setProductsToShow(products);
        else
            setProductsToShow(products.filter((item: product) => item.name.includes(search)));
    }, [search])

    return (
        <>
            <Nav />
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
            <button onClick={() => sortByPrice(true)}>sort (lower first)</button>
            <button onClick={() => sortByPrice(false)}>sort (higher first)</button>
            <Products productsToShow={productsToShow} />
        </>
    )
}
