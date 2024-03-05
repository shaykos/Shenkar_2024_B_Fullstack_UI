export type product = {
    id: number,
    name: string,
    price: number
}

export type ProductsProps = {
    productsToShow: product[]
}

export type ProductForm = {
    addProductToStore: Function
}