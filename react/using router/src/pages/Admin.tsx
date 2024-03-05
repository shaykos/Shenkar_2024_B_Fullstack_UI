import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Products from '../components/products/Products';
import { ProductsContext } from '../context/ProductsContext';
import AddProductForm from '../components/products/AddProductForm';

export default function Admin() {

    const { products, addProductToStore } = useContext<any>(ProductsContext);
    const [isAdminLogin, setAdminLogin] = useState<boolean>(false);


    useEffect(() => {
        if (sessionStorage.getItem('admin'))
            setAdminLogin(true);
    }, []);

    if (!isAdminLogin)
        return (
            <>
                <h1>Please login</h1>
                <Link to="/">Home</Link>
            </>
        )

    return (
        <>
            <h1>Admin Panel</h1>
            <Products productsToShow={products} />
            <AddProductForm addProductToStore={addProductToStore}/>
        </>
    )
}
