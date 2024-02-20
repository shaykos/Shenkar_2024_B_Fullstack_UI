import { createContext, useState } from "react";
import { product } from "../types/productTypes";

export const ProductsContext = createContext({});

export default function ProductsContextProvider({ children }: any) {

    const [products, setProducts] = useState<product[]>([
        {id:1, name:'עכבר', price: 13.59},
        {id:2, name:'מקלדת', price: 130.8},
        {id:3, name:'מסך', price: 500},
    ]);

    const value = {
        products
    }

    return (
        <ProductsContext.Provider value={value as any}>
            {children}
        </ProductsContext.Provider>
    )
}