import { createContext, useState } from "react";
import { product } from "../types/productTypes";

export const ProductsContext = createContext({});

export default function ProductsContextProvider({ children }: any) {

    const [products, setProducts] = useState<product[]>([
        { id: 1, name: 'עכבר', price: 13.59 },
        { id: 2, name: 'מקלדת', price: 130.8 },
        { id: 3, name: 'מסך', price: 500 },
    ]);

    /**
     * The function `addProductToStore` adds a product item to a store, updates the state with the new
     * product, and stores the updated product list in local storage.
     * @param {product} item - `item` is the product that needs to be added to the store. It is an
     * object representing a product with properties such as name, price, description, and any other
     * relevant information about the product.
     */
    function addProductToStore(item: product) {
        let allProducts = [...products, item];
        setProducts(allProducts);
        localStorage.setItem('products', JSON.stringify(allProducts));
    }

    const value = {
        products,
        addProductToStore
    }



    return (
        <ProductsContext.Provider value={value as any}>
            {children}
        </ProductsContext.Provider>
    )
}