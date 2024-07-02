import { RouterProvider } from 'react-router-dom'
import { routes } from './navigation';
import UserContextProvider from './context/userContext';

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={routes} />
    </UserContextProvider>
  )
}

export default App
