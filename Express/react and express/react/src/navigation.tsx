
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';

export const routes = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/users', element: <Users /> }
]);




