import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import AppLayout from "./App";   // import the main layout
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "./components/Cart";




//Chunking
//Lazy loading - on demand loading
const Grocery =lazy(()=> import("./components/Grocery"));

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
        element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>
       },
       {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
       },
       {
        path:"/cart",
        element: <Cart />
       },
       
       
     ],
     errorElement:<Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
