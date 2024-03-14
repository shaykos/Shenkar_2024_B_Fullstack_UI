import { useFormik } from "formik";
import { ProductForm, product } from "../../types/productTypes";
import { FormEvent, useState } from "react";

export default function AddProductForm({ addProductToStore }: ProductForm) {

    // const productForm = useFormik<product>({
    //     initialValues: {
    //         id: 0,
    //         name: '',
    //         price: 0
    //     },
    //     onSubmit: (values) => {
    //         console.log('values', values)
    //         addProductToStore(values)
    //     }
    // });

    const [item, setItem] = useState<product>({ id: 0, name: '', price: 0 })

    return (
        <>
            <form onSubmit={(e: FormEvent) => {
                e.preventDefault();
                addProductToStore(item);
            }}>
                <input required type="number" placeholder="id" value={item?.id} onChange={(e) => setItem((prev) => ({ ...prev, id: Number(e.target.value) }))} />
                <input required type="text" placeholder="name" value={item?.name} onChange={(e) => setItem((prev) => ({ ...prev, name: e.target.value }))} />
                <input required type="number" placeholder="price" value={item?.price} onChange={(e) => setItem((prev) => ({ ...prev, price: Number(e.target.value) }))} />
                <button type="submit">add new product</button>
            </form>
        </>
    )
}
