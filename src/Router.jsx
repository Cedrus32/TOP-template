import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'profile/:name',
            element: <Profile />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
