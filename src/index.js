import React from "react";
import ReactDOM from "react-dom/client";

import AppLayout from "./App";   // import the main layout
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Grocery from "./components/Grocery";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {  
     
      path:"/",
      element:<Body />
       },
       {
        path:"/about",
        element:<About />
       },
       {
        path:"/Contact",
        element: <Contact />
       },
        {
        path:"/grocery",
        element: <Grocery />
       },
       {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
       },
     ],
     errorElement:<Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
