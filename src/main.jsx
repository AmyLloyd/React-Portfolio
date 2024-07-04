import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages that the router will use to conditionally show the appropriate views
import App from './App.jsx';
import AboutPage from './components/pages/About.jsx';
import PortfolioPage from './components/pages/Portfolio.jsx';
import ContactPage from './components/pages/Contact.jsx';
import ResumePage from './components/pages/Resume.jsx';
import ErrorPage from './components/pages/Error.jsx';
import ResumePdf from './components/pages/ResumePdf';
import GitHubRedirect from './components/pages/GitHubRedirect.jsx';
import WordPress from './components/pages/WordPress.jsx';

//Define the routes and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: '',
          element: <AboutPage />,
        },
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
        },
        {
          path: 'resume-pdf',
          element: <ResumePdf />,
        },
        {
          path: 'gitHub-redirect',
          element: <GitHubRedirect />
        },
        {
          path:'wordpress',
          element: <WordPress />
        }
      ],
    },
  ]);

//Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
