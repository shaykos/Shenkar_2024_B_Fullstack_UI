import { createBrowserRouter } from "react-router-dom";
import App from './pages/App';
import Home from './pages/Home';
import About from './pages/About';
import Notes from "./pages/Notes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/app',
        element: <App />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/notes',
        element: <Notes />
    }
])