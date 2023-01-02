import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Works from "./pages/Works";
import { Footer , Navbar , ErrorPage } from './root';
import WithLoading from "./hocs/WithLoading";

import "./style.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const AppLayout = () => (
   <div className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
   </div>
);

const RenderWithLoading = WithLoading(AppLayout);

const router = createBrowserRouter([
   {
      path: "/",
      element: <RenderWithLoading />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "/Home",
            element: <Home />, 
         },
         {
            path: "About",
            element: <About />,
         },
         {
            path: "/Services",
            element: <Services />,
         },
         {
            path: "/Testimonial",
            element: <Testimonial />,
         },
         {
            path: "/Works",
            element: <Works />,
         },
         {
            path: "/Contact",
            element: <Contact />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>
   <RouterProvider router={router} />
   // </React.StrictMode>
);
