import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages that the router will use to conditionally show the appropriate views
import App from './App.jsx';
import AboutPage from './pages/About.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ContactPage from './pages/Contact.jsx';
import ResumePage from './pages/Resume.jsx';
import ErrorPage from './pages/Error.jsx';

//Define the routes and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: 'about',
          element: <AboutPage />,
        },
        // {
        //   path: 'project/:id',
        //   element: <ProfilePage />,
        // },
        {
          path: 'portfolio',
          element: <PortfolioPage />,
        },
        {
            path: 'contact',
            element: <ContactPage />,
        },
        {
            path: 'resume',
            element: <ResumePage />
        }
      ],
    },
  ]);

//Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
