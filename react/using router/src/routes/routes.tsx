import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import Item from "../pages/Item";
import ProductsContextProvider from "../context/ProductsContext";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path:'/store',
        element: <ProductsContextProvider><Store /></ProductsContextProvider>
    },
    {
        path:'/item/:id',
        element: <ProductsContextProvider><Item /></ProductsContextProvider>
    }
]);